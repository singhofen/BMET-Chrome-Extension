const equipSelect = document.getElementById("equipSelect");
const checklistArea = document.getElementById("checklistArea");
const scratchpad = document.getElementById("scratchpad");
const convInput = document.getElementById("convInput");
const convType = document.getElementById("convType");
const convResult = document.getElementById("convResult");

// Load Initial Data
chrome.storage.local.get(["equipment", "scratchpad"], (data) => {
    if (data.equipment) {
        data.equipment.forEach(dev => {
            const opt = document.createElement("option");
            opt.value = dev.id;
            opt.textContent = `${dev.name} (${dev.location})`;
            equipSelect.appendChild(opt);
        });
    }
    if (data.scratchpad) scratchpad.value = data.scratchpad;
});

// UI Logic
equipSelect.addEventListener("change", () => checklistArea.classList.toggle("hidden", !equipSelect.value));

const convert = () => {
    const val = parseFloat(convInput.value);
    if (isNaN(val)) return;
    let res = 0;
    if (convType.value === "psiToBar") res = val * 0.0689;
    else if (convType.value === "barToPsi") res = val * 14.503;
    else if (convType.value === "cToF") res = (val * 9 / 5) + 32;
    else if (convType.value === "fToC") res = (val - 32) * 5 / 9;
    convResult.textContent = `Result: ${res.toFixed(2)}`;
};
convInput.addEventListener("input", convert);
convType.addEventListener("change", convert);

scratchpad.addEventListener("input", () => chrome.storage.local.set({ scratchpad: scratchpad.value }));

document.getElementById("openOptions").addEventListener("click", () => chrome.runtime.openOptionsPage());

// Save PM
document.getElementById("savePM").addEventListener("click", () => {
    const id = parseInt(equipSelect.value);
    const dateDue = document.getElementById("dueDate").value;
    if (!id || !dateDue) return alert("Select device and due date");

    const log = {
        id: Date.now(),
        equipId: id,
        name: equipSelect.options[equipSelect.selectedIndex].text,
        date: new Date().toLocaleDateString(),
        notes: document.getElementById("pmNotes").value,
        nextDue: dateDue
    };

    chrome.storage.local.get(["pmLogs", "equipment"], r => {
        const logs = r.pmLogs || [];
        logs.push(log);
        const eq = r.equipment || [];
        const dev = eq.find(d => d.id === id);
        if (dev) dev.dueDate = dateDue;
        chrome.storage.local.set({ pmLogs: logs, equipment: eq }, () => {
            alert("PM Logged!");
            location.reload();
        });
    });
});

// CSV Export Logic
document.getElementById("exportCsv").addEventListener("click", () => {
    chrome.storage.local.get(["pmLogs"], (data) => {
        const logs = data.pmLogs || [];
        if (logs.length === 0) return alert("No logs to export.");

        let csv = "Date,Equipment,Notes,Next Due\n";
        logs.forEach(l => {
            csv += `"${l.date}","${l.name}","${l.notes}","${l.nextDue}"\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', `BMET_PM_Log_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
const deviceList = document.getElementById("deviceList");

function loadDevices() {
    chrome.storage.local.get(["equipment"], r => {
        const eq = r.equipment || [];
        deviceList.innerHTML = "";
        eq.forEach((dev, i) => {
            const li = document.createElement("li");
            li.className = "flex justify-between p-3 border-slate-200 mb-2 rounded bg-slate-50";
            li.innerHTML = `
                <span><strong>${dev.name}</strong> (${dev.location}) - Due: ${dev.dueDate}</span>
                <button class="text-red-500" data-index="${i}" style="color:red; background:none;">Remove</button>
            `;
            deviceList.appendChild(li);

            li.querySelector("button").addEventListener("click", () => {
                eq.splice(i, 1);
                chrome.storage.local.set({ equipment: eq }, loadDevices);
            });
        });
    });
}

document.getElementById("addDev").addEventListener("click", () => {
    const name = document.getElementById("devName").value;
    const loc = document.getElementById("devLoc").value;
    const due = document.getElementById("devDue").value;
    if (!name) return;

    chrome.storage.local.get(["equipment"], r => {
        const eq = r.equipment || [];
        eq.push({ id: Date.now(), name, location: loc, dueDate: due });
        chrome.storage.local.set({ equipment: eq }, () => {
            document.getElementById("devName").value = "";
            loadDevices();
        });
    });
});

loadDevices();
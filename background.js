/**
 * BMET Toolkit - Privacy & Permissions Notice
 * * PERMISSIONS:
 * - storage: Used solely to save equipment inventory, PM logs, and scratchpad notes locally.
 * - notifications: Used to alert the user when a device's PM date is within 30 days.
 * - alarms: Used to trigger the 24-hour background check for upcoming PMs.
 * * DATA PRIVACY:
 * - This extension operates on a "Local-First" architecture. 
 * - All data (Inventory, PM Logs, Serial Numbers) is stored in chrome.storage.local.
 * - NO data is transmitted to external servers, APIs, or third-party databases.
 * - The developer does not have access to any equipment data entered by the user.
 */ // background.js - Production Version

chrome.runtime.onInstalled.addListener(() => {
    // Initialize empty storage if it doesn't exist
    chrome.storage.local.get(["equipment", "pmLogs", "scratchpad"], res => {
        if (!res.equipment) {
            chrome.storage.local.set({
                equipment: [],
                pmLogs: [],
                scratchpad: ""
            });
        }
    });

    // Create the daily watchdog for PM dates
    chrome.alarms.create("calCheck", { periodInMinutes: 1440 });
});

// Watchdog Listener
chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === "calCheck") checkCals();
});

function checkCals() {
    chrome.storage.local.get(['equipment'], r => {
        const list = r.equipment || [];
        const today = new Date();
        const thirtyDaysOut = new Date();
        thirtyDaysOut.setDate(today.getDate() + 30);

        list.forEach(item => {
            if (!item.dueDate) return;
            const due = new Date(item.dueDate);

            // Alert if PM is due within 30 days
            if (due > today && due <= thirtyDaysOut) {
                chrome.notifications.create({
                    type: "basic",
                    iconUrl: "icons/icon128.png",
                    title: "Upcoming PM Reminder",
                    message: `${item.name} (${item.location}) is due on ${item.dueDate}`,
                    priority: 2
                });
            }
        });
    });
}
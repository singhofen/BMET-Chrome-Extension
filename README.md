# 🛡️ BMET Toolkit: Professional Equipment Maintenance Suite

<p align="center">
  <img src="icon128.png" width="128" alt="BMET Toolkit Logo">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
  <img src="https://img.shields.io/badge/Chrome-Extension-orange?logo=google-chrome&logoColor=white" alt="Chrome Extension">
  <img src="https://img.shields.io/badge/Focus-Clinical%20Engineering-blue" alt="Focus">
  <img src="https://img.shields.io/badge/Privacy-Local%20First-green" alt="Privacy">
</p>

---

### 🚀 Overview
**BMET Toolkit** is a lightweight, all-in-one productivity extension engineered specifically for **Biomedical Equipment Technicians (BMETs)** and clinical engineering professionals. Streamline your workflow, manage inventory, and ensure 100% compliance—all directly from your browser.

[**Features**](#-key-features) • [**Privacy**](#-privacy--security-first) • [**Installation**](#-installation--setup) • [**Contributing**](#-contributing)

---

## 🛠️ Key Features

### 📋 Biomedical Inventory Dashboard
Manage your entire fleet with a dedicated management page. Add new devices like **Infusion Pumps, Syringe Pumps, or Defibrillators** and track their status in a clean, organized hierarchy.
* **Smart Filtering:** Quickly view "Overdue Only" devices to prioritize your day.
* **Instant Removal:** Keep your inventory clean as equipment is retired or moved.

### 🕒 PM Watchdog & Smart Notifications
Never miss a deadline again. The automated background watchdog monitors your inventory and triggers **instant browser notifications** for any device due for inspection.

### ✅ Integrated PM Checklist & Logging
Log your maintenance without leaving your current tab.
* **Standardized Checks:** Includes Physical Inspection, Battery Check, and Electrical Safety toggles.
* **S/N Tracking:** Record specific serial numbers (e.g., S/N 777) for every log entry.
* **Auto-Saves:** Notes are saved locally as you type, preventing data loss.

### 📊 CSV Export for Compliance
Bridge the gap between field work and your CMMS. With a single click, export your maintenance logs into a **standardized CSV format** containing dates, equipment names, notes, and next due dates—ready for your official records.

### ⚡ Quick Calibration Converter
Perform instant conversions for medical device calibration:
* **Pressure:** PSI ↔ Bar
* **Temperature:** Celsius ↔ Fahrenheit

---

## 📸 Project Gallery

### Main Interface & Inventory
![Inventory Dashboard](Screenshot%20BMET_Toolkit%20Dashboard%20Inventory%20ADD-DELETE.png)
*Managing a high-volume fleet with clear status tracking.*

### Maintenance Logging & Field Notes
| PM Checklist in Action | Successful Log Confirmation |
| :---: | :---: |
| ![PM Checklist](Screenshot%20BMET_Toolkit%20PM%20COMPLETED%20WITH%20FEILD%20NOTES.png) | ![Log Confirmed](Screenshot%20BMET_Toolkit%20PM%20Logged%20Image.png) |

### Compliance Reporting
![CSV Export Sample](Screenshot%20BMET_Toolkit%20Sample%20EXPORT%20CSV%20FILE%20FOR%20RECORDS.png)
*Standardized output for easy integration into hospital CMMS systems.*

---

## 🔒 Privacy & Security First
In a healthcare environment, data privacy is paramount. BMET Toolkit is built on a **"Local-First"** architecture using `chrome.storage.local`.

* **Zero Cloud Storage:** Your equipment data and notes never leave your machine.
* **Offline Ready:** All features work 100% without an internet connection.
* **No Tracking:** No data is collected or transmitted to external servers.

---

## 💻 Tech Stack
* **Frontend:** HTML5, Tailwind CSS
* **Logic:** JavaScript (ES6+)
* **Storage:** Chrome Storage API (Local)
* **Notifications:** Chrome Alarms & Notifications API

---

## ⚙️ Installation & Setup

1. **Clone the Repo**
   ```bash
   git clone [https://github.com/yourusername/BMET-Chrome-Extension.git](https://github.com/yourusername/BMET-Chrome-Extension.git)

---
Open Chrome Extensions
Navigate to chrome://extensions/ in your browser.

Enable Developer Mode
Toggle the switch in the top right corner.

Load Unpacked
Click "Load unpacked" and select the project folder.
---
🤝 Contributing
Contributions make the BMET community stronger!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

---
<p align="center">
Built for BMETs, by a BMET. 🛠️
</p>

# 📘 Email Data Breach Checker

## 🔍 Overview

This project allows users to check if their email address has been involved in any known data breaches using the [XposedOrNot API](https://xposedornot.com/). The application provides a clean interface to enter an email, check for breaches, and view the results directly on the page.

---

## 🧠 Understanding Data Breaches

A **data breach** occurs when unauthorized users gain access to private, sensitive, or confidential data. Email addresses are often leaked in such breaches, which could expose login credentials, personal data, and more. This tool helps you verify whether your email is safe or compromised.

---

## ✨ Features

* ✅ Check any email for past data breaches
* 📋 Display total number of breaches
* 📌 Show all breached platforms
* 🛡️ Display "No breaches found" if email is safe
* 🌍 Simple HTML/CSS/JS frontend
* ⚙️ Node.js backend using Express

---

## 🛠 Tech Stack

| Layer       | Technology            | Purpose                            |
| ----------- | --------------------- | ---------------------------------- |
| Frontend    | HTML, CSS, JavaScript | User interface and form handling   |
| Backend     | Node.js, Express.js   | API logic and routing              |
| HTTP Client | Axios                 | Fetch data from breach API         |
| API         | XposedOrNot API       | Provides breach info               |
| Middleware  | CORS                  | Allow frontend-backend interaction |

---

## 🎥 Demo

> \[Insert Demo Video Link Here]

---

## 🚀 Getting Started

### 📋 Prerequisites

* Node.js & npm
* Git

### 📁 Clone the Repository

```bash
git clone https://github.com/your-username/email-breach-checker.git
cd email-breach-checker
```

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Run the Backend

```bash
node server.js
```

The server will start at `http://localhost:5000`

### 🌐 Open the Frontend

Navigate to the `public` folder and open `index.html` in your browser.


## 🔌 Frontend-Backend Connection

Ensure that the frontend fetch URL in `script.js` matches your backend URL:

```js
fetch('http://localhost:5000/checkBreach', {
```

Update if deploying the backend elsewhere.

---

## 🧪 Sample Outputs

### 📍 When Breaches Are Found:

```
Total breaches found for someone@example.com: 3
- LinkedIn
- Canva
- MyFitnessPal
```

### 🛡️ When No Breaches Are Found:

```
No breaches found for this email.
```

---

## 📈 Future Improvements

* 📧 Send email summary to the user
* 🗓 Show breach dates and compromised data types
* 🛠 Input validation & loader animation
* 📊 Logging and analytics (optional)

---

## 📬 Contact

Created by **Padarthi Sai Kousik**
For queries: [psaikousik@gmail.com](mailto:psaikousik@gmail.com)

---

## 📄 License

This project is open-source and free to use under the MIT License.

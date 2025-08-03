
---

## 📘 `README.md` for `expense-tracker-server` (Backend)

```markdown
# 💸 Expense Tracker Project — Backend

This is the Express backend for the Expense Tracker app. It handles authentication, session management, and transaction APIs. Uses MongoDB for storage and JWT with HttpOnly cookies for secure auth.

## 🌐 Live API

[https://extraker-project-server.onrender.com](https://your-backend.onrender.com)

## 🧰 Tech Stack

- Express.js
- MongoDB (via Mongoose)
- JWT
- HttpOnly Cookies
- CORS
- Nodemailer
- Cryprography
- Postman
- Bcrypt
- Nodemon
- Render (deployment)

## 🔐 Features

- OTP-Verification, Reset Password flow via email
- Secure login/logout with JWT in HttpOnly cookies
- Session restoration via `/me` endpoint
- Protected routes for transactions
- CORS configured for frontend origin
- Cookie settings for cross-origin auth

## 🛠️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/somu/expense-tracker-server.git
cd expense-tracker-server

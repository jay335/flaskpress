
# FlaskPress:App with CI/CD

This project contains a **Flask backend** and an **Express.js frontend**, deployed using **PM2**, managed via a **Jenkins CI/CD pipeline**, and hosted on an **AWS EC2 instance**.

---

## 📁 Project Structure

```
flaskpress/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── venv/
    └── Jenkinsfile

├── frontend/
│   ├── app.js
│   ├── package.json
│   └── .env
    └── Jenkinsfile

```

---

## 🔧 Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: Express.js (Node.js)
- **Process Manager**: PM2
- **CI/CD**: Jenkins
- **Hosting**: AWS EC2 (Ubuntu)
- **Webhooks**: GitHub to Jenkins via webhook

---

## 🚀 Deployment Instructions

### 1. **Clone the Repo**
```bash
git clone https://github.com/jay335/flaskpress.git
cd flaskpress
```

---

### 2. **Backend Setup (Flask)**

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pm2 start app.py --interpreter venv/bin/python --name flask-backend
```

---

### 3. **Frontend Setup (Express)**

```bash
cd ../frontend
npm install
echo "BACKEND_URL=http://<backend-public-ip>:5000" > .env
pm2 start app.js --name express-frontend
```

---

### 4. **Jenkins Setup (CI/CD)**

- Install Jenkins on your EC2 instance (use WSL/Ubuntu or native).
- Install required Jenkins plugins:
  - Git
  - NodeJS
  - Pipeline
- Configure webhook in GitHub:
  - URL: `http://<jenkins-public-ip>:8080/github-webhook/`
- Add your pipeline:
  - Source: GitHub repo
  - Jenkinsfile: from repo root
- Trigger builds on every push.

---

## ✅ PM2 Process Management

Check running services:
```bash
pm2 list
```

Restart backend:
```bash
pm2 restart flask-backend
```

Restart frontend:
```bash
pm2 restart express-frontend
```

Persist PM2 on restart:
```bash
pm2 startup
pm2 save
```

---

## 🌐 URLs

- **Backend**: `http://<ec2-public-ip>:5000/view`
- **Frontend App**: `http://<ec2-public-ip>:3000`

---


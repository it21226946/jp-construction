# ⚠️ Port Changed: 5000 → 5001

## Issue Resolved

Port 5000 was already in use by macOS AirPlay Receiver (ControlCenter). The backend port has been changed to **5001**.

---

## ✅ What Was Changed

1. **Backend Port**: Changed from 5000 to 5001 in `backend/.env`
2. **Frontend Contact Form**: Updated to use port 5001

---

## 🚀 Start Your Backend

Now you can start the backend server:

```bash
cd backend
npm run dev
```

The server will now run on: **http://localhost:5001**

---

## 📝 Updated URLs

- **Backend API**: `http://localhost:5001`
- **Health Check**: `http://localhost:5001/health`
- **Contact API**: `http://localhost:5001/api/contact`
- **Projects API**: `http://localhost:5001/api/projects`

---

## 🧪 Test It

After starting the backend:

```bash
# Test health endpoint
curl http://localhost:5001/health

# Test projects
curl http://localhost:5001/api/projects
```

---

## 💡 Why This Happened

macOS uses port 5000 for AirPlay Receiver by default. Changing the backend port is the easiest solution.

---

## ✅ Everything Should Work Now!

Your frontend contact form is already updated to use port 5001, so everything is synchronized! 🎉


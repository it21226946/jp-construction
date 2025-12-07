# 👋 START HERE!

## Welcome! Your Project is Ready 🎉

Everything is built and ready to run. Follow the steps below to get started!

---

## ⚡ Quick Start (Choose Your Path)

### 🟢 **Path 1: I Have PostgreSQL Installed** (Fastest - ~10 minutes)

1. Install backend dependencies:
   ```bash
   cd backend && npm install
   ```

2. Create `.env` file:
   ```bash
   cp env.template .env
   # Edit .env with your PostgreSQL password
   ```

3. Create database:
   ```bash
   createdb jp_construction
   ```

4. Initialize database:
   ```bash
   npm run init-db
   ```

5. Start backend (Terminal 1):
   ```bash
   npm run dev
   ```

6. Start frontend (Terminal 2):
   ```bash
   cd .. && npm run dev
   ```

7. Open browser: `http://localhost:5173`

**Done!** ✅

---

### 🟡 **Path 2: I Need to Install PostgreSQL** (~20 minutes)

1. **Install PostgreSQL:**
   - macOS: `brew install postgresql@15 && brew services start postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`
   - Windows: Download from https://www.postgresql.org/download/windows/

2. Then follow Path 1 above

---

### 🔵 **Path 3: Use Docker for Database** (Easy Alternative - ~15 minutes)

1. Install Docker Desktop (if not installed)

2. Run PostgreSQL in Docker:
   ```bash
   docker run --name jp-db \
     -e POSTGRES_DB=jp_construction \
     -e POSTGRES_USER=postgres \
     -e POSTGRES_PASSWORD=password123 \
     -p 5432:5432 \
     -d postgres:15
   ```

3. Create `.env` in backend:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=jp_construction
   DB_USER=postgres
   DB_PASSWORD=password123
   FRONTEND_URL=http://localhost:5173
   ```

4. Continue with steps 4-7 from Path 1

---

## 📖 Detailed Instructions

For step-by-step guidance, see: **`NEXT_STEPS.md`**

## 🆘 Need Help?

- **Quick Start Guide**: `backend/QUICKSTART.md`
- **Troubleshooting**: See `NEXT_STEPS.md` troubleshooting section
- **Full Docs**: `backend/README.md`

---

## 🎯 What You'll Have After Setup

✅ **Frontend running** on http://localhost:5173  
✅ **Backend API** running on http://localhost:5000  
✅ **Database** with sample project data  
✅ **Contact form** fully functional  
✅ **Everything connected** and working!  

---

## 🚀 Ready?

Pick a path above and let's go! Start with installing backend dependencies. 💪


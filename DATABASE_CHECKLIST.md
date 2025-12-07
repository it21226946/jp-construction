# ✅ Database Setup Checklist

Use this checklist to track your database setup progress!

---

## 📋 Setup Checklist

### Step 1: Check PostgreSQL Installation
- [ ] Run: `psql --version`
- [ ] See version number? → PostgreSQL is installed ✅
- [ ] See "command not found"? → Need to install PostgreSQL

**If not installed, install now:**
- [ ] macOS: `brew install postgresql@15 && brew services start postgresql@15`
- [ ] Linux: `sudo apt-get install postgresql postgresql-contrib`
- [ ] Or use Docker (see DATABASE_SETUP.md)

---

### Step 2: Create Database
- [ ] Run: `createdb jp_construction`
- [ ] Or: `psql postgres` → `CREATE DATABASE jp_construction;`
- [ ] Verify: `psql -l | grep jp_construction`

**Status:** Database created ✅ / ❌

---

### Step 3: Create `.env` File
- [ ] Navigate to backend: `cd backend`
- [ ] Copy template: `cp env.template .env`
- [ ] File created: `backend/.env` exists

**Status:** `.env` file created ✅ / ❌

---

### Step 4: Configure `.env` File
- [ ] Open `backend/.env` in text editor
- [ ] Set `DB_HOST=localhost`
- [ ] Set `DB_PORT=5432`
- [ ] Set `DB_NAME=jp_construction`
- [ ] Set `DB_USER=postgres`
- [ ] Set `DB_PASSWORD=your_actual_password`

**Common configurations:**
- [ ] Standard PostgreSQL: Set password you created
- [ ] Postgres.app (Mac): Leave password empty or use your Mac username
- [ ] Docker: Use password from docker run command

**Status:** `.env` configured ✅ / ❌

---

### Step 5: Test Database Connection
- [ ] Run: `psql -U postgres -d jp_construction`
- [ ] Can connect? → See `jp_construction=#` prompt
- [ ] Type `\q` to exit

**If connection fails:**
- [ ] Check PostgreSQL is running
- [ ] Verify password in `.env`
- [ ] Check database exists

**Status:** Connection works ✅ / ❌

---

### Step 6: Initialize Database Schema
- [ ] In backend directory: `cd backend`
- [ ] Run: `npm run init-db`
- [ ] See: "✅ Database initialized successfully!"
- [ ] See: "Tables created: contacts, projects"
- [ ] See: "Projects: 3" (sample data)

**If initialization fails:**
- [ ] Check database connection
- [ ] Verify `.env` file settings
- [ ] Check PostgreSQL is running

**Status:** Schema initialized ✅ / ❌

---

### Step 7: Test Backend Connection
- [ ] Start backend: `cd backend && npm run dev`
- [ ] See: "✅ Connected to PostgreSQL database"
- [ ] Server running on port 5000

**Status:** Backend connected ✅ / ❌

---

### Step 8: Test API Endpoints
- [ ] Test health: `curl http://localhost:5000/health`
- [ ] Test projects: `curl http://localhost:5000/api/projects`
- [ ] Projects endpoint returns JSON with 3 projects

**Status:** API working ✅ / ❌

---

## 🎉 Completion Status

Track your progress:

- [ ] Step 1: PostgreSQL installed
- [ ] Step 2: Database created
- [ ] Step 3: `.env` file created
- [ ] Step 4: `.env` configured
- [ ] Step 5: Connection tested
- [ ] Step 6: Schema initialized
- [ ] Step 7: Backend connected
- [ ] Step 8: API tested

**Total Progress:** ___/8 steps complete

---

## 🚀 Quick Commands Reference

```bash
# Check PostgreSQL
psql --version

# Create database
createdb jp_construction

# Create .env
cd backend && cp env.template .env

# Test connection
psql -U postgres -d jp_construction

# Initialize schema
cd backend && npm run init-db

# Start backend
cd backend && npm run dev

# Test API
curl http://localhost:5000/health
curl http://localhost:5000/api/projects
```

---

## 📚 Need Help?

- **Quick Guide**: See `QUICK_DATABASE_SETUP.md`
- **Detailed Guide**: See `DATABASE_SETUP.md`
- **Troubleshooting**: Check error messages and see DATABASE_SETUP.md

---

## ✅ Success!

When all steps are complete:
- ✅ Database is created
- ✅ Backend connects successfully
- ✅ API endpoints work
- ✅ Ready for development!

🎉 **Congratulations! Your database is set up!**


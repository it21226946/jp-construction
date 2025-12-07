# 🚀 NEXT STEPS - Action Plan

## Your Next Move: Set Up and Run the Complete Application

Follow these steps to get your full-stack application running!

---

## Step-by-Step Action Plan

### 📋 **Step 1: Install Backend Dependencies** (5 minutes)

```bash
cd backend
npm install
```

This installs all backend packages (Express, PostgreSQL, Nodemailer, etc.)

**Expected output**: `npm` will download and install all packages

---

### 📋 **Step 2: Create Environment Configuration** (2 minutes)

Create a `.env` file in the `backend` directory:

```bash
# In backend directory
cp env.template .env
```

Then edit `.env` file with your settings. **Minimum required:**

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=postgres
DB_PASSWORD=your_password_here

FRONTEND_URL=http://localhost:5173
```

**Note**: Email settings are optional - contact forms work without them.

---

### 📋 **Step 3: Set Up PostgreSQL Database** (5-10 minutes)

#### Option A: If PostgreSQL is Already Installed

```bash
# Create database
createdb jp_construction

# Or with specific user:
createdb -U postgres jp_construction
```

#### Option B: Install PostgreSQL First

**macOS:**
```bash
brew install postgresql@15
brew services start postgresql@15
createdb jp_construction
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install postgresql postgresql-contrib
sudo -u postgres createdb jp_construction
```

**Windows:**
- Download from https://www.postgresql.org/download/windows/
- Install and use pgAdmin or psql to create database

#### Option C: Use Docker (Easiest!)

```bash
docker run --name jp-construction-db \
  -e POSTGRES_DB=jp_construction \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=mypassword \
  -p 5432:5432 \
  -d postgres:15
```

Then update `.env`:
```env
DB_PASSWORD=mypassword
```

---

### 📋 **Step 4: Initialize Database Schema** (1 minute)

```bash
# Still in backend directory
npm run init-db
```

This creates all tables and inserts sample project data.

**Expected output**: 
```
📦 Initializing database...
✅ Database initialized successfully!
📊 Tables created: contacts, projects
```

---

### 📋 **Step 5: Start Backend Server** (Terminal 1)

```bash
# In backend directory
npm run dev
```

**Expected output:**
```
🚀 Server is running on http://localhost:5000
📝 Environment: development
🌐 CORS enabled for: http://localhost:5173
✅ Connected to PostgreSQL database
```

**Keep this terminal open!**

---

### 📋 **Step 6: Start Frontend Server** (Terminal 2)

Open a NEW terminal window:

```bash
# Go back to project root
cd /Users/inazawaelectronics/Desktop/jp\ construction\ copy

# Start frontend
npm run dev
```

**Expected output:**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

### 📋 **Step 7: Test Everything!** (2 minutes)

1. **Visit Frontend**: Open `http://localhost:5173` in your browser
   - ✅ Homepage should load
   - ✅ Navigation should work
   - ✅ All sections visible

2. **Test Contact Form**:
   - Fill out the contact form
   - Click "送信する / Send Message"
   - ✅ Should show success message
   - ✅ Check backend terminal - should see request logged
   - ✅ Check database - data should be saved

3. **Test API Directly**:
   ```bash
   curl http://localhost:5000/health
   curl http://localhost:5000/api/projects
   ```

---

## 🎯 Quick Command Summary

**Terminal 1 (Backend):**
```bash
cd backend
npm install
cp env.template .env
# Edit .env with your database settings
createdb jp_construction
npm run init-db
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd /Users/inazawaelectronics/Desktop/jp\ construction\ copy
npm run dev
```

---

## ⚠️ Troubleshooting

### Backend won't start?
- ✅ Check PostgreSQL is running: `psql -l`
- ✅ Verify database exists: `psql -l | grep jp_construction`
- ✅ Check `.env` file has correct credentials
- ✅ Check port 5000 is not in use

### Database connection error?
- ✅ Verify PostgreSQL service is running
- ✅ Check database credentials in `.env`
- ✅ Try connecting manually: `psql -U postgres -d jp_construction`

### Frontend can't connect to backend?
- ✅ Ensure backend is running on port 5000
- ✅ Check browser console for errors
- ✅ Verify CORS is configured (should be automatic)

### Contact form not submitting?
- ✅ Check backend is running
- ✅ Open browser DevTools → Network tab
- ✅ Look for errors in console
- ✅ Check backend terminal for error messages

---

## 📊 What Success Looks Like

### ✅ Backend Running:
```
🚀 Server is running on http://localhost:5000
✅ Connected to PostgreSQL database
```

### ✅ Frontend Running:
```
Local:   http://localhost:5173/
```

### ✅ Contact Form Working:
- Form submits successfully
- Success message appears
- Data saved in database
- (Optional) Email notification sent

---

## 🎉 After Setup Complete

Once everything is running:

1. ✅ **Test all features**
2. ✅ **Add real project data** via API or database
3. ✅ **Configure email** (optional) for notifications
4. ✅ **Customize** as needed
5. ✅ **Deploy** when ready!

---

## 📚 Need Help?

- **Backend Setup**: See `backend/QUICKSTART.md`
- **Full Documentation**: See `backend/README.md`
- **Project Overview**: See `README.md`
- **Status**: See `PROJECT_STATUS.md`

---

## 🚀 Ready to Start?

Begin with **Step 1** above - install backend dependencies! Good luck! 🎯


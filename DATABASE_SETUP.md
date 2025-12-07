# 🗄️ Database Setup Guide

Complete guide to setting up PostgreSQL database and connecting it to your project.

---

## 🎯 Quick Overview

You need to:
1. **Install PostgreSQL** (if not already installed)
2. **Create the database**
3. **Configure `.env` file** with database credentials
4. **Initialize database schema**
5. **Test the connection**

---

## Step 1: Check if PostgreSQL is Installed

### macOS/Linux:
```bash
psql --version
```

If you see a version number (e.g., `psql (PostgreSQL) 15.x`), you're good! Skip to Step 2.

If you get "command not found", install PostgreSQL (see below).

---

## Step 2: Install PostgreSQL (If Needed)

### Option A: macOS (Homebrew) - Recommended

```bash
# Install PostgreSQL
brew install postgresql@15

# Start PostgreSQL service
brew services start postgresql@15

# Verify it's running
brew services list | grep postgresql
```

### Option B: macOS (Postgres.app) - Easiest GUI

1. Download from: https://postgresapp.com/
2. Install and open the app
3. Click "Initialize" to create a new server
4. Note the default port (usually 5432)

### Option C: Linux (Ubuntu/Debian)

```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

# Start service
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Option D: Windows

1. Download from: https://www.postgresql.org/download/windows/
2. Run the installer
3. Remember the password you set for `postgres` user
4. Install pgAdmin (optional GUI tool)

### Option E: Docker (Works on All Platforms)

```bash
docker run --name jp-construction-db \
  -e POSTGRES_DB=jp_construction \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=mysecurepassword \
  -p 5432:5432 \
  -d postgres:15
```

**Note:** If using Docker, your database is already created! Skip to Step 3.

---

## Step 3: Create the Database

### Method 1: Using Command Line (macOS/Linux)

```bash
# Connect to PostgreSQL as default user
psql postgres

# Create database
CREATE DATABASE jp_construction;

# Verify it was created
\l

# Exit
\q
```

### Method 2: Direct Command (macOS/Linux)

```bash
createdb jp_construction
```

### Method 3: With Specific User

```bash
createdb -U postgres jp_construction
```

### Method 4: Using Docker

If you used Docker in Step 2, the database is already created! Just note:
- Database name: `jp_construction`
- User: `postgres`
- Password: `mysecurepassword` (or what you set)

### Method 5: Using pgAdmin (GUI - Windows/Mac)

1. Open pgAdmin
2. Connect to your PostgreSQL server
3. Right-click "Databases" → "Create" → "Database"
4. Name: `jp_construction`
5. Click "Save"

---

## Step 4: Configure Environment Variables

### Create `.env` File

```bash
cd backend
cp env.template .env
```

### Edit `.env` File

Open `backend/.env` in a text editor and fill in your database credentials:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=postgres
DB_PASSWORD=your_actual_password_here

# Email Configuration (Optional - can leave empty)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASS=
EMAIL_FROM=noreply@motegi-615.jp
EMAIL_TO=mk-kaitai@motegi-615.jp

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

### Common Database Configurations:

#### Standard PostgreSQL:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=postgres
DB_PASSWORD=your_password
```

#### Docker PostgreSQL:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=postgres
DB_PASSWORD=mysecurepassword
```

#### Postgres.app (macOS):
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=your_mac_username
DB_PASSWORD=
```

---

## Step 5: Test Database Connection

### Quick Test (Command Line)

```bash
# Test if you can connect
psql -U postgres -d jp_construction

# Or with password prompt
psql -h localhost -U postgres -d jp_construction
```

If you can connect, you'll see the PostgreSQL prompt: `jp_construction=#`

Type `\q` to exit.

---

## Step 6: Initialize Database Schema

Now that your database is created and configured, initialize it with tables:

```bash
# Make sure you're in backend directory
cd backend

# Run initialization script
npm run init-db
```

**Expected Output:**
```
📦 Initializing database...
✅ Database initialized successfully!
📊 Tables created:
   - contacts
   - projects
   - Indexes and triggers set up

📈 Current data:
   - Contacts: 0
   - Projects: 3
```

---

## Step 7: Verify Everything Works

### Test 1: Backend Server with Database

Start your backend server:

```bash
cd backend
npm run dev
```

**Expected Output:**
```
🚀 Server is running on http://localhost:5000
📝 Environment: development
🌐 CORS enabled for: http://localhost:5173
✅ Connected to PostgreSQL database
```

**If you see "✅ Connected to PostgreSQL database" → Success!** 🎉

### Test 2: Test API Endpoints

In another terminal:

```bash
# Test projects endpoint (should return data)
curl http://localhost:5000/api/projects

# Should return JSON with 3 sample projects
```

### Test 3: Test Contact Form

1. Start frontend: `npm run dev` (from root)
2. Go to: `http://localhost:5173`
3. Navigate to contact form
4. Fill out and submit
5. Check backend terminal - should see request logged
6. Check database - data should be saved

---

## 🔧 Troubleshooting

### Problem: "Database does not exist"

**Solution:**
```bash
createdb jp_construction
```

Or create manually:
```bash
psql postgres
CREATE DATABASE jp_construction;
\q
```

---

### Problem: "Password authentication failed"

**Solution:**
1. Check password in `.env` file
2. Try resetting PostgreSQL password:
   ```bash
   psql postgres
   ALTER USER postgres PASSWORD 'newpassword';
   ```
3. Update `.env` with new password

---

### Problem: "Connection refused"

**Possible causes:**
1. PostgreSQL not running
   ```bash
   # macOS (Homebrew)
   brew services start postgresql@15
   
   # Linux
   sudo systemctl start postgresql
   
   # Check if running
   ps aux | grep postgres
   ```

2. Wrong port in `.env`
   - Check PostgreSQL port: `psql -p 5432 postgres`
   - Or check Postgres.app port (might be 5433)

3. Wrong host
   - Should be `localhost` for local database

---

### Problem: "Role does not exist"

**Solution:**
Create the user/role:
```bash
psql postgres
CREATE USER postgres WITH PASSWORD 'your_password';
ALTER USER postgres CREATEDB;
\q
```

---

### Problem: Docker container not running

**Solution:**
```bash
# Check if running
docker ps | grep jp-construction-db

# If not, start it
docker start jp-construction-db

# Or recreate
docker rm jp-construction-db
docker run --name jp-construction-db \
  -e POSTGRES_DB=jp_construction \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=mysecurepassword \
  -p 5432:5432 \
  -d postgres:15
```

---

## 📋 Quick Checklist

- [ ] PostgreSQL installed
- [ ] PostgreSQL service running
- [ ] Database `jp_construction` created
- [ ] `.env` file created in `backend/` directory
- [ ] Database credentials filled in `.env`
- [ ] Connection tested with `psql`
- [ ] Schema initialized with `npm run init-db`
- [ ] Backend server connects successfully
- [ ] Test endpoints work

---

## 🎉 Success Indicators

You'll know everything is working when:

1. ✅ `npm run init-db` completes without errors
2. ✅ Backend server shows: "✅ Connected to PostgreSQL database"
3. ✅ `curl http://localhost:5000/api/projects` returns JSON data
4. ✅ Contact form submissions save to database

---

## 📚 Next Steps

Once database is set up:

1. ✅ Backend fully functional
2. ✅ Contact form saves data
3. ✅ Projects API returns data
4. ✅ Ready for development!

See `NEXT_STEPS.md` for continuing development.

---

## 🆘 Need Help?

- Check error messages in terminal
- Verify `.env` file configuration
- Test connection with `psql` command
- See troubleshooting section above

Good luck! 🚀


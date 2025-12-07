# ⚡ Quick Database Setup - Step by Step

## Follow These Steps to Create and Connect Your Database

---

## 🎯 Step 1: Check if PostgreSQL is Installed

Run this command:

```bash
psql --version
```

### ✅ If you see a version number:
- PostgreSQL is installed! Skip to Step 2.

### ❌ If you see "command not found":
- You need to install PostgreSQL first (see Step 1B below).

---

## 📦 Step 1B: Install PostgreSQL (Only if needed)

### macOS (Easiest - Homebrew):
```bash
brew install postgresql@15
brew services start postgresql@15
```

### macOS (GUI - Postgres.app):
1. Download: https://postgresapp.com/
2. Install and open
3. Click "Initialize"

### Linux (Ubuntu/Debian):
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### Docker (All Platforms):
```bash
docker run --name jp-db \
  -e POSTGRES_DB=jp_construction \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password123 \
  -p 5432:5432 \
  -d postgres:15
```

**If using Docker**, your database is already created! Skip to Step 3.

---

## 🗄️ Step 2: Create the Database

Run this command:

```bash
createdb jp_construction
```

### If that doesn't work, try:

```bash
psql postgres
```

Then inside PostgreSQL prompt:
```sql
CREATE DATABASE jp_construction;
\q
```

### Verify it was created:

```bash
psql -l | grep jp_construction
```

You should see `jp_construction` in the list!

---

## ⚙️ Step 3: Create `.env` File

```bash
cd backend
cp env.template .env
```

---

## ✏️ Step 4: Configure `.env` File

Open `backend/.env` in a text editor and update:

```env
# Database Configuration - UPDATE THESE!
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=postgres
DB_PASSWORD=your_password_here  # ← Change this!

# Keep these as is for now
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Common Password Scenarios:

- **If you set a password**: Use that password
- **If no password** (Postgres.app on Mac): Leave `DB_PASSWORD=` empty or remove the line
- **Docker**: Use the password you set (e.g., `password123`)

---

## 🧪 Step 5: Test Database Connection

```bash
psql -U postgres -d jp_construction
```

If you can connect, you'll see: `jp_construction=#`

Type `\q` to exit.

**If connection fails:**
- Check if PostgreSQL is running
- Verify password in `.env` file
- Try: `psql postgres` (without database name)

---

## 🚀 Step 6: Initialize Database Schema

```bash
# Make sure you're in backend directory
cd backend

# Initialize database
npm run init-db
```

**Expected Output:**
```
📦 Initializing database...
✅ Database initialized successfully!
📊 Tables created:
   - contacts
   - projects
📈 Current data:
   - Contacts: 0
   - Projects: 3
```

**If you see this → Database is ready!** ✅

---

## ✅ Step 7: Test Backend Connection

Start your backend server:

```bash
cd backend
npm run dev
```

**Look for this message:**
```
✅ Connected to PostgreSQL database
```

**If you see this → Everything is connected!** 🎉

---

## 🎯 Quick Command Summary

Copy and paste these commands one by one:

```bash
# 1. Create database
createdb jp_construction

# 2. Go to backend directory
cd backend

# 3. Create .env file
cp env.template .env

# 4. Edit .env file (open in text editor)
#    Update DB_PASSWORD with your PostgreSQL password

# 5. Initialize database
npm run init-db

# 6. Start backend (test connection)
npm run dev
```

---

## 🔧 Troubleshooting

### "Database does not exist"
```bash
createdb jp_construction
```

### "Password authentication failed"
- Check password in `.env` file
- Try: `psql postgres` to test connection
- Reset password: `psql postgres` → `ALTER USER postgres PASSWORD 'newpass';`

### "Connection refused"
- PostgreSQL not running? Start it:
  - macOS: `brew services start postgresql@15`
  - Linux: `sudo systemctl start postgresql`

### "Role does not exist"
```bash
psql postgres
CREATE USER postgres WITH PASSWORD 'your_password';
ALTER USER postgres CREATEDB;
```

---

## ✅ Success Checklist

- [ ] PostgreSQL installed and running
- [ ] Database `jp_construction` created
- [ ] `.env` file created in `backend/` directory
- [ ] Database password set in `.env`
- [ ] `npm run init-db` completed successfully
- [ ] Backend shows "✅ Connected to PostgreSQL database"

---

## 🎉 You're Done!

Once you see "✅ Connected to PostgreSQL database" in your backend terminal, your database is fully set up and connected!

**Next:** Test the contact form to see data being saved!

---

See `DATABASE_SETUP.md` for detailed instructions and more troubleshooting tips.


# ⚙️ Configure Your .env File

## Quick Configuration Guide

Since you're using Homebrew PostgreSQL on macOS, here's how to configure your `.env` file.

---

## 🎯 Step 1: Check Your PostgreSQL User

Your database was created with your macOS username: **`inazawaelectronics`**

Homebrew PostgreSQL typically doesn't require a password for local connections.

---

## ✏️ Step 2: Edit Your .env File

Open `backend/.env` in your text editor and update the database section:

### Option A: Use Your macOS Username (Recommended for Homebrew)

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=inazawaelectronics
DB_PASSWORD=
```

**Note:** Leave `DB_PASSWORD` empty (no password needed for Homebrew PostgreSQL)

---

### Option B: Use 'postgres' User (If it exists)

If you have a `postgres` user with a password, use:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=postgres
DB_PASSWORD=your_actual_password
```

---

## ✅ Step 3: Complete .env File Example

Here's a complete `.env` file for your setup:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=inazawaelectronics
DB_PASSWORD=

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

---

## 🧪 Step 4: Test Your Configuration

After editing `.env`, test the connection:

```bash
cd backend
npm run init-db
```

If you see:
```
✅ Database initialized successfully!
```

**You're all set!** ✅

---

## 🔧 Troubleshooting

### If you get "password authentication failed"

Try Option A above (use your macOS username with no password).

### If you get "role does not exist"

The database user might be different. Check:

```bash
psql -d jp_construction -c "\conninfo"
```

Use the username shown there.

---

## 📝 Quick Edit Command

You can edit the file with:

```bash
# macOS/Linux
nano backend/.env

# Or open in your default editor
open backend/.env  # macOS
```

---

**Next Step:** After configuring `.env`, run `npm run init-db` to initialize the database!


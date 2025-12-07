# Quick Start Guide

Get your backend up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
cd backend
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=postgres
DB_PASSWORD=your_password_here

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM=noreply@motegi-615.jp
EMAIL_TO=mk-kaitai@motegi-615.jp

FRONTEND_URL=http://localhost:5173
```

**Important**: Replace the placeholder values with your actual credentials.

## Step 3: Set Up PostgreSQL Database

### Option A: Using psql (Command Line)

```bash
# Create database
createdb jp_construction

# Or if you need to specify user
createdb -U postgres jp_construction
```

### Option B: Using PostgreSQL Client

Connect to PostgreSQL and run:
```sql
CREATE DATABASE jp_construction;
```

### Option C: Using Docker (if you have Docker)

```bash
docker run --name jp-construction-db \
  -e POSTGRES_DB=jp_construction \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=your_password \
  -p 5432:5432 \
  -d postgres:15
```

Then update your `.env` file with the password you set.

## Step 4: Initialize Database Schema

```bash
npm run init-db
```

This will create all tables and insert sample project data.

## Step 5: Start the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

You should see:
```
🚀 Server is running on http://localhost:5000
📝 Environment: development
🌐 CORS enabled for: http://localhost:5173
✅ Connected to PostgreSQL database
```

## Step 6: Test the API

### Test Health Endpoint:
```bash
curl http://localhost:5000/health
```

### Test Contact Form:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "projectType": "residential",
    "message": "Test message"
  }'
```

### Test Projects Endpoint:
```bash
curl http://localhost:5000/api/projects
```

## Email Configuration (Optional)

Email notifications are optional. The contact form will work even without email configuration.

### For Gmail:
1. Enable 2-Step Verification in your Google Account
2. Go to Security → App passwords
3. Generate a new app password for "Mail"
4. Use this app password in `EMAIL_PASS` (not your regular password)

### Skip Email (Development):
Leave `EMAIL_USER` and `EMAIL_PASS` empty in `.env`. The backend will log a warning but continue working.

## Common Issues

### Database Connection Failed
- ✅ Check PostgreSQL is running: `psql -l`
- ✅ Verify database exists: `psql -l | grep jp_construction`
- ✅ Check credentials in `.env` file

### Port Already in Use
- ✅ Change `PORT` in `.env` to a different number (e.g., 5001)
- ✅ Or stop the process using port 5000

### Email Not Sending
- ✅ This is OK! Contact forms still work without email
- ✅ Check email credentials if you want notifications
- ✅ Use Gmail App Password, not regular password

## Next Steps

1. ✅ Backend is ready!
2. Start your frontend: `cd .. && npm run dev`
3. Frontend should connect to backend at `http://localhost:5000`

## Need Help?

Check the main [README.md](./README.md) for detailed documentation.


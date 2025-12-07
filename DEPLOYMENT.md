# 🚀 Deployment Guide

This guide will help you deploy the JP Construction website to production.

## 📋 Overview

This project consists of:
- **Frontend**: React + Vite (Static site)
- **Backend**: Node.js + Express API
- **Database**: PostgreSQL

## 🎯 Recommended Deployment Platforms

### Frontend
- **Vercel** (Recommended) - Free, easy, automatic deployments
- **Netlify** - Alternative option
- **GitHub Pages** - Free but requires build step

### Backend
- **Railway** (Recommended) - Easy PostgreSQL integration
- **Render** - Good alternative
- **Heroku** - Paid option

### Database
- **Railway PostgreSQL** (Recommended) - Integrated with Railway backend
- **Supabase** - Free PostgreSQL hosting
- **Neon** - Serverless PostgreSQL

---

## 🎨 Frontend Deployment (Vercel)

### Step 1: Prepare Environment Variables

1. Create a `.env.production` file in the root directory:
```env
VITE_API_URL=https://your-backend-url.railway.app
```

**Note**: Replace `your-backend-url.railway.app` with your actual backend URL after deploying the backend.

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: Using GitHub Integration (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**: Add `VITE_API_URL` with your backend URL
6. Click "Deploy"

### Step 3: Update Environment Variables
After deployment, go to your Vercel project settings and add:
- `VITE_API_URL` = Your backend API URL (e.g., `https://your-backend.railway.app`)

---

## 🔧 Backend Deployment (Railway)

### Step 1: Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"

### Step 2: Deploy Backend
1. Click "Deploy from GitHub repo"
2. Select your repository
3. Railway will detect it's a Node.js project
4. Set the **Root Directory** to `backend`
5. Railway will automatically build and deploy

### Step 3: Add PostgreSQL Database
1. In your Railway project, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will create a PostgreSQL database
4. Copy the connection details

### Step 4: Configure Environment Variables
In Railway, go to your backend service → Variables tab, add:

```env
PORT=5000
NODE_ENV=production

# Database (from Railway PostgreSQL service)
DB_HOST=<railway-provided-host>
DB_PORT=5432
DB_NAME=railway
DB_USER=postgres
DB_PASSWORD=<railway-provided-password>

# Email (Optional - for contact form notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@motegi-615.jp
EMAIL_TO=mk-kaitai@motegi-615.jp

# Frontend URL (your Vercel deployment URL)
FRONTEND_URL=https://your-frontend.vercel.app
```

### Step 5: Initialize Database
1. In Railway, go to your backend service
2. Click "Deployments" → Latest deployment → "View Logs"
3. Open the terminal/console
4. Run:
```bash
npm run init-db
```

Or connect to the database directly and run the SQL from `backend/database/schema.sql`

### Step 6: Get Backend URL
1. In Railway, go to your backend service
2. Click "Settings" → "Generate Domain"
3. Copy the URL (e.g., `https://your-backend.railway.app`)

### Step 7: Update Frontend
1. Go back to Vercel
2. Update the `VITE_API_URL` environment variable with your Railway backend URL
3. Redeploy the frontend

---

## 🔄 Alternative: Render Deployment

### Backend on Render

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Configure:
   - **Name**: `jp-construction-backend`
   - **Root Directory**: `backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables (same as Railway)
7. Click "Create Web Service"

### Database on Render

1. In Render dashboard, click "New" → "PostgreSQL"
2. Configure:
   - **Name**: `jp-construction-db`
   - **Database**: `jp_construction`
   - **User**: `jp_construction_user`
3. Copy connection details
4. Update backend environment variables

---

## 🗄️ Database Setup

### Option 1: Using Railway PostgreSQL (Easiest)
- Automatically provisioned
- Connection details in Railway dashboard
- No additional setup needed

### Option 2: Using Supabase (Free)
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy connection string
5. Update backend environment variables:
```env
DB_HOST=<supabase-host>
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=<supabase-password>
```

### Option 3: Using Neon (Serverless)
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy connection string
4. Update backend environment variables

### Initialize Database Schema
After setting up the database, run:
```bash
# Connect to your database and run:
psql -h <host> -U <user> -d <database> -f backend/database/schema.sql

# Or use Railway/Render console:
npm run init-db
```

---

## ✅ Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Database created and schema initialized
- [ ] Environment variables configured
- [ ] Frontend deployed with correct API URL
- [ ] CORS configured to allow frontend domain
- [ ] Test contact form submission
- [ ] Test API endpoints (`/health`, `/api/projects`)
- [ ] SSL certificates active (automatic on Vercel/Railway)

---

## 🔍 Testing Your Deployment

### Test Backend
```bash
# Health check
curl https://your-backend.railway.app/health

# Should return:
# {"success":true,"message":"Server is running",...}
```

### Test Frontend
1. Visit your Vercel URL
2. Try submitting the contact form
3. Check browser console for errors
4. Verify API calls are going to the correct backend URL

---

## 🐛 Troubleshooting

### Frontend can't connect to backend
- Check `VITE_API_URL` is set correctly
- Verify backend URL is accessible
- Check CORS settings in backend
- Ensure `FRONTEND_URL` in backend matches your Vercel URL

### Database connection errors
- Verify database credentials
- Check database is accessible from backend
- Ensure database schema is initialized
- Check firewall/network settings

### Build errors
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Contact form not working
- Verify backend is running
- Check API endpoint URL in frontend
- Check browser console for errors
- Verify CORS is configured correctly

---

## 📝 Environment Variables Summary

### Frontend (.env.production)
```env
VITE_API_URL=https://your-backend.railway.app
```

### Backend (Railway/Render)
```env
PORT=5000
NODE_ENV=production
DB_HOST=<database-host>
DB_PORT=5432
DB_NAME=<database-name>
DB_USER=<database-user>
DB_PASSWORD=<database-password>
FRONTEND_URL=https://your-frontend.vercel.app
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=<your-email>
EMAIL_PASS=<your-app-password>
EMAIL_FROM=noreply@motegi-615.jp
EMAIL_TO=mk-kaitai@motegi-615.jp
```

---

## 🔐 Security Notes

1. **Never commit `.env` files** - They're in `.gitignore`
2. **Use environment variables** for all sensitive data
3. **Enable HTTPS** - Vercel and Railway provide this automatically
4. **Keep dependencies updated** - Regularly run `npm audit`
5. **Use strong database passwords**
6. **Limit CORS** to your frontend domain only

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 🎉 Success!

Once deployed, your website will be live at:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-backend.railway.app`

Congratulations! Your JP Construction website is now live! 🚀


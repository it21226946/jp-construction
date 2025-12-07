# JP Construction Website

A modern, bilingual (Japanese/English) website for a Japanese construction and demolition company with a complete frontend and backend API.

## 🏗️ Project Overview

This is a full-stack web application for **茂手木解体工業株式会社** (Motegi Demolition Industry Co., Ltd.), featuring:

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + PostgreSQL
- **Features**: Contact forms, project portfolio, bilingual support

## 📁 Project Structure

```
.
├── backend/              # Backend API server
│   ├── config/          # Database & email configuration
│   ├── database/        # Database schema
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── middleware/      # Express middleware
│   └── server.js        # Main server file
├── src/                 # Frontend React application
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx  # Contact form (connects to backend)
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Services.tsx
│   └── App.tsx
└── public/              # Static assets
```

## 🚀 Quick Start

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (see backend/env.template)
cp env.template .env
# Edit .env with your database credentials

# Create PostgreSQL database
createdb jp_construction

# Initialize database schema
npm run init-db

# Start backend server
npm run dev
```

Backend will run on `http://localhost:5000`

## 📡 API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  - Used by frontend `Contact.tsx` component
  - Saves to database and sends email notification

### Projects
- **GET** `/api/projects` - Get all projects (with optional category filter)
- **GET** `/api/projects/:id` - Get specific project
- **POST** `/api/projects` - Create new project
- **PUT** `/api/projects/:id` - Update project
- **DELETE** `/api/projects/:id` - Delete project

### Health Check
- **GET** `/health` - Server status

## 🔌 Frontend-Backend Integration

The frontend is already configured to connect to the backend:

- **Contact Form** (`src/components/Contact.tsx`):
  - Sends POST requests to `http://localhost:5000/api/contact`
  - Handles form validation and submission
  - Displays success/error messages

## 🛠️ Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router (if needed)
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- PostgreSQL
- Nodemailer (email notifications)
- Express Validator (input validation)
- Helmet (security)
- CORS

## 📝 Configuration

### Backend Environment Variables

Create `backend/.env` file:

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=jp_construction
DB_USER=postgres
DB_PASSWORD=your_password

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@motegi-615.jp
EMAIL_TO=mk-kaitai@motegi-615.jp

FRONTEND_URL=http://localhost:5173
```

See `backend/env.template` for a template.

## 📚 Documentation

- **Backend Setup**: See `BACKEND_SETUP.md`
- **Backend Full Docs**: See `backend/README.md`
- **Backend Quick Start**: See `backend/QUICKSTART.md`

## ✨ Features

### Frontend Features
- ✅ Bilingual UI (Japanese/English)
- ✅ Responsive design
- ✅ Modern, animated UI with Tailwind CSS
- ✅ Contact form with validation
- ✅ Project portfolio gallery
- ✅ Services showcase
- ✅ Company information

### Backend Features
- ✅ RESTful API
- ✅ Contact form submission handling
- ✅ Projects CRUD operations
- ✅ Email notifications
- ✅ Input validation
- ✅ Error handling
- ✅ CORS support
- ✅ Database persistence

## 🗄️ Database

PostgreSQL database with two main tables:

1. **contacts** - Stores contact form submissions
2. **projects** - Stores project portfolio items

See `backend/database/schema.sql` for full schema.

## 📧 Email Notifications

When a contact form is submitted:
- Data is saved to database
- Email notification is sent (if configured)
- Confirmation message shown to user

Email configuration is optional - contact forms work without it.

## 🚢 Deployment

### Frontend
```bash
npm run build
# Deploy dist/ folder to hosting service
```

### Backend
1. Set `NODE_ENV=production` in `.env`
2. Configure production database
3. Set up environment variables
4. Use process manager (PM2, systemd, etc.)

## 📝 Development Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server (with watch)
- `npm start` - Start production server
- `npm run init-db` - Initialize database schema

## 🆘 Troubleshooting

### Backend won't start
- Check PostgreSQL is running
- Verify database exists and credentials are correct
- Check `.env` file is configured

### Contact form not submitting
- Ensure backend is running on port 5000
- Check browser console for errors
- Verify CORS is configured correctly

### Database connection errors
- Verify PostgreSQL is installed and running
- Check database credentials in `.env`
- Ensure database `jp_construction` exists

## 📄 License

ISC

## 👥 Support

For issues or questions, check the documentation files:
- `BACKEND_SETUP.md` - Backend setup guide
- `backend/README.md` - Backend documentation
- `backend/QUICKSTART.md` - Quick start guide


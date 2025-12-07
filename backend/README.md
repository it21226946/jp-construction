# JP Construction Backend API

Backend API server for the JP Construction/Demolition Company website.

## Features

- ✅ Contact form submission API
- ✅ Projects portfolio management (CRUD)
- ✅ Email notifications for contact submissions
- ✅ PostgreSQL database integration
- ✅ Input validation and error handling
- ✅ CORS support for frontend
- ✅ Security headers (Helmet)
- ✅ Request logging (Morgan)

## Prerequisites

- Node.js 18+ 
- PostgreSQL 12+ (or SQLite for development)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from the example:
```bash
cp .env.example .env
```

4. Configure your `.env` file with your database and email settings:
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

## Database Setup

1. Create PostgreSQL database:
```bash
createdb jp_construction
```

Or using PostgreSQL client:
```sql
CREATE DATABASE jp_construction;
```

2. Initialize database schema:
```bash
npm run init-db
```

This will create all necessary tables, indexes, and insert sample project data.

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the PORT specified in .env).

## API Endpoints

### Health Check
- `GET /health` - Check server status

### Contact Form
- `POST /api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "03-1234-5678",
    "projectType": "residential",
    "message": "I need a quote for house demolition"
  }
  ```

- `GET /api/contact` - Get all contacts (admin)
- `GET /api/contact/:id` - Get specific contact
- `DELETE /api/contact/:id` - Delete contact

### Projects
- `GET /api/projects` - Get all projects
  - Query params: `category`, `limit`, `offset`
  - Example: `/api/projects?category=residential&limit=10`

- `GET /api/projects/:id` - Get specific project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## Email Configuration

The backend sends email notifications when contact forms are submitted. To configure:

1. **Gmail**: Use an [App Password](https://support.google.com/accounts/answer/185833)
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"

2. **Other SMTP providers**: Update `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS` in `.env`

**Note**: If email is not configured, contact form submissions will still work and be saved to the database. Only the email notification will be skipped.

## Project Structure

```
backend/
├── config/
│   ├── database.js      # PostgreSQL connection pool
│   └── email.js         # Email service configuration
├── database/
│   └── schema.sql       # Database schema
├── middleware/
│   └── errorHandler.js  # Error handling middleware
├── models/
│   ├── Contact.js       # Contact model/queries
│   └── Project.js       # Project model/queries
├── routes/
│   ├── contactRoutes.js # Contact API routes
│   └── projectRoutes.js # Project API routes
├── scripts/
│   └── initDatabase.js  # Database initialization script
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── server.js           # Main server file
└── README.md           # This file
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment mode | development |
| `DB_HOST` | Database host | localhost |
| `DB_PORT` | Database port | 5432 |
| `DB_NAME` | Database name | jp_construction |
| `DB_USER` | Database user | postgres |
| `DB_PASSWORD` | Database password | - |
| `EMAIL_HOST` | SMTP server host | smtp.gmail.com |
| `EMAIL_PORT` | SMTP server port | 587 |
| `EMAIL_USER` | Email username | - |
| `EMAIL_PASS` | Email password/app password | - |
| `EMAIL_FROM` | Sender email address | - |
| `EMAIL_TO` | Recipient email address | - |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |

## Testing

### Test Contact Form Submission:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "03-1234-5678",
    "projectType": "residential",
    "message": "Test message"
  }'
```

### Test Projects Endpoint:
```bash
curl http://localhost:5000/api/projects
```

## Troubleshooting

### Database Connection Error
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Verify database exists: `psql -l | grep jp_construction`

### Email Not Sending
- Check email credentials in `.env`
- For Gmail, ensure App Password is used (not regular password)
- Check email service logs in console
- Email failures don't break contact form submission

### CORS Errors
- Verify `FRONTEND_URL` in `.env` matches your frontend URL
- Check browser console for specific CORS errors

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use strong database passwords
3. Configure proper CORS origins
4. Set up SSL/HTTPS
5. Use environment-specific email configuration
6. Set up database backups
7. Configure proper logging
8. Consider adding authentication for admin endpoints

## License

ISC


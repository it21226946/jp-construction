# 📝 How to Update Your Database Data

This guide shows you **three ways** to update your database data:

---

## 🎯 Method 1: Interactive Data Manager Script (Recommended)

The easiest way to manage your data is using the interactive script:

```bash
cd backend
npm run manage-data
```

This will show you a menu where you can:
- ✅ List all projects
- ✅ Update existing projects
- ✅ Add new projects
- ✅ Delete projects
- ✅ View recent contacts

**Example:**
```
🗄️  Database Data Manager
================================================================================
1. List all projects
2. Update a project
3. Add a new project
4. Delete a project
5. List recent contacts
6. Exit
================================================================================

Select an option (1-6): 2
```

---

## 🌐 Method 2: Using API Endpoints

You can use the REST API to manage your data programmatically or via tools like Postman/curl.

### **Projects Endpoints:**

#### Get All Projects
```bash
curl http://localhost:5001/api/projects
```

#### Get Single Project
```bash
curl http://localhost:5001/api/projects/1
```

#### Create New Project
```bash
curl -X POST http://localhost:5001/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "category": "commercial",
    "title": "新規プロジェクト",
    "titleEn": "New Project",
    "location": "東京都",
    "locationEn": "Tokyo",
    "date": "2024年1月",
    "dateEn": "January 2024",
    "image": "/images/project.jpg",
    "simpleDescription": "プロジェクト説明",
    "simpleDescriptionEn": "Project description"
  }'
```

#### Update Project
```bash
curl -X PUT http://localhost:5001/api/projects/1 \
  -H "Content-Type: application/json" \
  -d '{
    "category": "residential",
    "title": "更新されたプロジェクト",
    "titleEn": "Updated Project",
    "location": "大阪府",
    "locationEn": "Osaka",
    "date": "2024年2月",
    "dateEn": "February 2024"
  }'
```

#### Delete Project
```bash
curl -X DELETE http://localhost:5001/api/projects/1
```

### **Contacts Endpoints:**

#### Get All Contacts
```bash
curl http://localhost:5001/api/contact
```

#### Get Single Contact
```bash
curl http://localhost:5001/api/contact/1
```

#### Delete Contact
```bash
curl -X DELETE http://localhost:5001/api/contact/1
```

---

## 🗄️ Method 3: Direct SQL Queries

You can also connect to PostgreSQL directly and run SQL commands:

### **Connect to Database:**
```bash
psql -d jp_construction
```

### **Useful SQL Commands:**

#### List All Projects
```sql
SELECT id, category, title, location, date FROM projects ORDER BY id;
```

#### Update a Project
```sql
UPDATE projects 
SET 
  title = '新しいタイトル',
  title_en = 'New Title',
  location = '新しい場所',
  updated_at = NOW()
WHERE id = 1;
```

#### Add a New Project
```sql
INSERT INTO projects (
  category, title, title_en, location, location_en, 
  date, date_en, image, simple_description, simple_description_en
) VALUES (
  'commercial',
  '新規プロジェクト',
  'New Project',
  '東京都',
  'Tokyo',
  '2024年1月',
  'January 2024',
  '/images/project.jpg',
  '説明',
  'Description'
);
```

#### Delete a Project
```sql
DELETE FROM projects WHERE id = 1;
```

#### List Recent Contacts
```sql
SELECT id, name, email, phone, project_type, created_at 
FROM contacts 
ORDER BY created_at DESC 
LIMIT 20;
```

---

## 📋 Project Data Fields

When updating or creating projects, here are the available fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `category` | string | ✅ Yes | `commercial`, `residential`, or `industrial` |
| `title` | string | ✅ Yes | Project title in Japanese (max 200 chars) |
| `titleEn` | string | Optional | Project title in English (max 200 chars) |
| `location` | string | Optional | Location in Japanese (max 200 chars) |
| `locationEn` | string | Optional | Location in English (max 200 chars) |
| `date` | string | Optional | Date in Japanese format (max 50 chars) |
| `dateEn` | string | Optional | Date in English format (max 50 chars) |
| `image` | string | Optional | Image URL path (must be valid URL) |
| `simpleDescription` | string | Optional | Short description in Japanese (max 500 chars) |
| `simpleDescriptionEn` | string | Optional | Short description in English (max 500 chars) |

---

## 🎨 Image Paths

Make sure your image paths match your public directory structure:
- Frontend images: `/images/your-image.jpg`
- The actual files should be in: `public/images/your-image.jpg`

---

## ✅ Quick Start Example

**1. Start the interactive manager:**
```bash
cd backend
npm run manage-data
```

**2. Choose option 1** to list all projects

**3. Choose option 2** to update a project

**4. Enter the project ID** and follow the prompts

**5. Press Enter** to keep existing values, or type new values

---

## 🚨 Important Notes

- **Backup your data** before making major changes
- The `updated_at` timestamp is automatically updated when you modify a project
- Contacts are read-only (can only delete, not update)
- Category must be one of: `commercial`, `residential`, `industrial`
- Make sure your backend server is running if using API endpoints

---

## 🆘 Troubleshooting

### "Connection refused" error
- Make sure PostgreSQL is running: `brew services list`
- Check your `.env` file has correct database credentials

### "Project not found"
- List projects first to see available IDs
- IDs are auto-incrementing numbers starting from 1

### "Invalid category" error
- Category must be exactly: `commercial`, `residential`, or `industrial`

---

**Need help?** Check your `.env` file configuration in `CONFIGURE_ENV.md`


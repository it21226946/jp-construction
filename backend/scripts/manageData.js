import pool from '../config/database.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function listProjects() {
  try {
    const result = await pool.query('SELECT id, category, title, location, date FROM projects ORDER BY id');
    console.log('\n📋 Current Projects:');
    console.log('─'.repeat(80));
    if (result.rows.length === 0) {
      console.log('   No projects found.');
    } else {
      result.rows.forEach((project) => {
        console.log(`   ID: ${project.id} | ${project.category} | ${project.title}`);
        console.log(`        Location: ${project.location} | Date: ${project.date}`);
      });
    }
    console.log('─'.repeat(80));
    return result.rows;
  } catch (error) {
    console.error('❌ Error fetching projects:', error.message);
    return [];
  }
}

async function updateProject() {
  const projects = await listProjects();
  if (projects.length === 0) {
    console.log('No projects to update.');
    return;
  }

  const id = await question('\nEnter project ID to update: ');
  const project = projects.find((p) => p.id.toString() === id);
  
  if (!project) {
    console.log('❌ Project not found.');
    return;
  }

  // Get current project details
  const current = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
  const currentData = current.rows[0];

  console.log('\n📝 Current Project Details:');
  console.log('─'.repeat(80));
  console.log(`   Category: ${currentData.category}`);
  console.log(`   Title: ${currentData.title}`);
  console.log(`   Title (EN): ${currentData.title_en || '(empty)'}`);
  console.log(`   Location: ${currentData.location || '(empty)'}`);
  console.log(`   Location (EN): ${currentData.location_en || '(empty)'}`);
  console.log(`   Date: ${currentData.date || '(empty)'}`);
  console.log(`   Date (EN): ${currentData.date_en || '(empty)'}`);
  console.log(`   Image: ${currentData.image || '(empty)'}`);
  console.log(`   Simple Description: ${currentData.simple_description || '(empty)'}`);
  console.log(`   Simple Description (EN): ${currentData.simple_description_en || '(empty)'}`);
  console.log('─'.repeat(80));

  console.log('\n💡 Press Enter to keep current value, or type new value:');

  const category = await question(`Category [${currentData.category}]: `) || currentData.category;
  const title = await question(`Title [${currentData.title}]: `) || currentData.title;
  const titleEn = await question(`Title (EN) [${currentData.title_en || ''}]: `) || currentData.title_en;
  const location = await question(`Location [${currentData.location || ''}]: `) || currentData.location;
  const locationEn = await question(`Location (EN) [${currentData.location_en || ''}]: `) || currentData.location_en;
  const date = await question(`Date [${currentData.date || ''}]: `) || currentData.date;
  const dateEn = await question(`Date (EN) [${currentData.date_en || ''}]: `) || currentData.date_en;
  const image = await question(`Image URL [${currentData.image || ''}]: `) || currentData.image;
  const simpleDescription = await question(`Simple Description [${currentData.simple_description || ''}]: `) || currentData.simple_description;
  const simpleDescriptionEn = await question(`Simple Description (EN) [${currentData.simple_description_en || ''}]: `) || currentData.simple_description_en;

  try {
    const result = await pool.query(
      `UPDATE projects SET
        category = $1, title = $2, title_en = $3, location = $4, location_en = $5,
        date = $6, date_en = $7, image = $8, simple_description = $9,
        simple_description_en = $10, updated_at = NOW()
      WHERE id = $11
      RETURNING *`,
      [category, title, titleEn, location, locationEn, date, dateEn, image, simpleDescription, simpleDescriptionEn, id]
    );

    console.log('\n✅ Project updated successfully!');
    console.log(`   Updated: ${result.rows[0].title}`);
  } catch (error) {
    console.error('❌ Error updating project:', error.message);
  }
}

async function addProject() {
  console.log('\n➕ Add New Project\n');

  const category = await question('Category (commercial/residential/industrial): ');
  if (!['commercial', 'residential', 'industrial'].includes(category)) {
    console.log('❌ Invalid category. Must be: commercial, residential, or industrial');
    return;
  }

  const title = await question('Title (Japanese): ');
  if (!title) {
    console.log('❌ Title is required.');
    return;
  }

  const titleEn = await question('Title (English): ') || null;
  const location = await question('Location (Japanese): ') || null;
  const locationEn = await question('Location (English): ') || null;
  const date = await question('Date (Japanese): ') || null;
  const dateEn = await question('Date (English): ') || null;
  const image = await question('Image URL: ') || null;
  const simpleDescription = await question('Simple Description (Japanese): ') || null;
  const simpleDescriptionEn = await question('Simple Description (English): ') || null;

  try {
    const result = await pool.query(
      `INSERT INTO projects (
        category, title, title_en, location, location_en, date, date_en,
        image, simple_description, simple_description_en, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
      RETURNING *`,
      [category, title, titleEn, location, locationEn, date, dateEn, image, simpleDescription, simpleDescriptionEn]
    );

    console.log('\n✅ Project added successfully!');
    console.log(`   ID: ${result.rows[0].id} | ${result.rows[0].title}`);
  } catch (error) {
    console.error('❌ Error adding project:', error.message);
  }
}

async function deleteProject() {
  const projects = await listProjects();
  if (projects.length === 0) {
    console.log('No projects to delete.');
    return;
  }

  const id = await question('\nEnter project ID to delete: ');
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    console.log('❌ Project not found.');
    return;
  }

  const confirm = await question(`\n⚠️  Are you sure you want to delete "${project.title}"? (yes/no): `);
  if (confirm.toLowerCase() !== 'yes') {
    console.log('❌ Deletion cancelled.');
    return;
  }

  try {
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);
    console.log('\n✅ Project deleted successfully!');
  } catch (error) {
    console.error('❌ Error deleting project:', error.message);
  }
}

async function listContacts() {
  try {
    const result = await pool.query('SELECT id, name, email, phone, project_type, created_at FROM contacts ORDER BY created_at DESC LIMIT 20');
    console.log('\n📋 Recent Contacts (last 20):');
    console.log('─'.repeat(80));
    if (result.rows.length === 0) {
      console.log('   No contacts found.');
    } else {
      result.rows.forEach((contact) => {
        console.log(`   ID: ${contact.id} | ${contact.name} | ${contact.email}`);
        console.log(`        Phone: ${contact.phone || '(none)'} | Type: ${contact.project_type || '(none)'}`);
        console.log(`        Date: ${new Date(contact.created_at).toLocaleString()}`);
      });
    }
    console.log('─'.repeat(80));
    return result.rows;
  } catch (error) {
    console.error('❌ Error fetching contacts:', error.message);
    return [];
  }
}

async function showMenu() {
  console.log('\n' + '='.repeat(80));
  console.log('🗄️  Database Data Manager');
  console.log('='.repeat(80));
  console.log('1. List all projects');
  console.log('2. Update a project');
  console.log('3. Add a new project');
  console.log('4. Delete a project');
  console.log('5. List recent contacts');
  console.log('6. Exit');
  console.log('='.repeat(80));

  const choice = await question('\nSelect an option (1-6): ');

  switch (choice) {
    case '1':
      await listProjects();
      await showMenu();
      break;
    case '2':
      await updateProject();
      await showMenu();
      break;
    case '3':
      await addProject();
      await showMenu();
      break;
    case '4':
      await deleteProject();
      await showMenu();
      break;
    case '5':
      await listContacts();
      await showMenu();
      break;
    case '6':
      console.log('\n👋 Goodbye!');
      rl.close();
      await pool.end();
      process.exit(0);
      break;
    default:
      console.log('❌ Invalid option. Please choose 1-6.');
      await showMenu();
      break;
  }
}

// Main execution
(async () => {
  try {
    // Test database connection
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to database');
    
    await showMenu();
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    console.error('\n⚠️  Please check:');
    console.error('   1. PostgreSQL is running');
    console.error('   2. Database credentials in .env file are correct');
    console.error('   3. Database "jp_construction" exists');
    rl.close();
    await pool.end();
    process.exit(1);
  }
})();


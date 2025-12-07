import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from '../config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDatabase() {
  try {
    console.log('📦 Initializing database...');
    
    // Read schema file
    const schemaPath = path.join(__dirname, '../database/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute schema
    await pool.query(schema);
    
    console.log('✅ Database initialized successfully!');
    console.log('📊 Tables created:');
    console.log('   - contacts');
    console.log('   - projects');
    console.log('   - Indexes and triggers set up');
    
    // Test connection and show counts
    const contactsResult = await pool.query('SELECT COUNT(*) FROM contacts');
    const projectsResult = await pool.query('SELECT COUNT(*) FROM projects');
    
    console.log(`\n📈 Current data:`);
    console.log(`   - Contacts: ${contactsResult.rows[0].count}`);
    console.log(`   - Projects: ${projectsResult.rows[0].count}`);
    
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.error('\n⚠️  Database connection failed. Please check:');
      console.error('   1. PostgreSQL is running');
      console.error('   2. Database credentials in .env file are correct');
      console.error('   3. Database "jp_construction" exists (or create it first)');
    }
    
    process.exit(1);
  } finally {
    await pool.end();
  }
}

initDatabase();


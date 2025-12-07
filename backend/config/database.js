import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

// Railway provides DB_URL or DATABASE_URL as a connection string
// Format: postgresql://user:password@host:port/database
const dbUrl = process.env.DB_URL || process.env.DATABASE_URL;

let poolConfig;

if (dbUrl) {
  // Use connection string (Railway format)
  poolConfig = {
    connectionString: dbUrl,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };
  console.log('📦 Using database connection string (Railway format)');
} else {
  // Use individual environment variables
  poolConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'jp_construction',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };
  console.log('📦 Using individual database environment variables');
}

const pool = new Pool(poolConfig);

// Test connection
pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('❌ Database connection error:', err.message);
  console.warn('⚠️  Server will continue running, but database operations will fail');
  // Don't exit - let server run without database for testing
});

// Test database connection function
export const testDatabaseConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW() as current_time, version() as pg_version');
    console.log('✅ Database connection test successful');
    console.log(`   PostgreSQL version: ${result.rows[0].pg_version.split(' ')[0]} ${result.rows[0].pg_version.split(' ')[1]}`);
    return {
      connected: true,
      timestamp: result.rows[0].current_time,
      version: result.rows[0].pg_version,
    };
  } catch (error) {
    console.error('❌ Database connection test failed:', error.message);
    return {
      connected: false,
      error: error.message,
    };
  }
};

// Test connection on module load (optional - can be called explicitly)
// testDatabaseConnection().catch(console.error);

export default pool;


import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { testDatabaseConnection } from './config/database.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // HTTP request logger

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://motegidemolition.netlify.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', async (req, res) => {
  const dbStatus = await testDatabaseConnection();
  
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: {
      connected: dbStatus.connected,
      ...(dbStatus.error && { error: dbStatus.error }),
    },
  });
});

// Database health check endpoint (more detailed)
app.get('/health/db', async (req, res) => {
  try {
    const dbStatus = await testDatabaseConnection();
    
    if (dbStatus.connected) {
      res.json({
        success: true,
        message: 'Database connection successful',
        database: {
          connected: true,
          timestamp: dbStatus.timestamp,
          version: dbStatus.version,
        },
      });
    } else {
      res.status(503).json({
        success: false,
        message: 'Database connection failed',
        database: {
          connected: false,
          error: dbStatus.error,
        },
      });
    }
  } catch (error) {
    res.status(503).json({
      success: false,
      message: 'Database health check failed',
      error: error.message,
    });
  }
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'JP Construction API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      contact: '/api/contact',
      projects: '/api/projects',
    },
  });
});

// Error handling middleware (must be last)
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  
  // Test database connection on startup
  console.log('\n🔍 Testing database connection...');
  const dbStatus = await testDatabaseConnection();
  if (dbStatus.connected) {
    console.log('✅ Database is ready!\n');
  } else {
    console.error('❌ Database connection failed!');
    console.error('   Please check your database configuration and environment variables.\n');
  }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Promise Rejection:', err);
  // Close server gracefully
  process.exit(1);
});

export default app;


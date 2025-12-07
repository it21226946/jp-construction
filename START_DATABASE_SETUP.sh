#!/bin/bash

# Database Setup Script for JP Construction Project
# Run this script to help set up your database

echo "🗄️  Database Setup for JP Construction"
echo "========================================"
echo ""

# Step 1: Check if PostgreSQL is installed
echo "Step 1: Checking if PostgreSQL is installed..."
if command -v psql &> /dev/null; then
    PSQL_VERSION=$(psql --version)
    echo "✅ PostgreSQL is installed: $PSQL_VERSION"
else
    echo "❌ PostgreSQL is not installed"
    echo ""
    echo "Please install PostgreSQL first:"
    echo "  macOS: brew install postgresql@15"
    echo "  Linux: sudo apt-get install postgresql"
    echo "  Or download from: https://www.postgresql.org/download/"
    exit 1
fi

echo ""
echo "Step 2: Creating database 'jp_construction'..."
if createdb jp_construction 2>/dev/null; then
    echo "✅ Database 'jp_construction' created successfully!"
elif psql -lqt | cut -d \| -f 1 | grep -qw jp_construction; then
    echo "ℹ️  Database 'jp_construction' already exists"
else
    echo "⚠️  Could not create database automatically"
    echo ""
    echo "Please create it manually:"
    echo "  createdb jp_construction"
    echo ""
    echo "Or using psql:"
    echo "  psql postgres"
    echo "  CREATE DATABASE jp_construction;"
    echo "  \\q"
    exit 1
fi

echo ""
echo "Step 3: Checking for .env file..."
if [ -f "backend/.env" ]; then
    echo "✅ .env file exists"
    echo ""
    echo "⚠️  Please verify your database credentials in backend/.env:"
    echo "   DB_HOST=localhost"
    echo "   DB_PORT=5432"
    echo "   DB_NAME=jp_construction"
    echo "   DB_USER=postgres"
    echo "   DB_PASSWORD=your_password"
else
    echo "📝 Creating .env file from template..."
    if [ -f "backend/env.template" ]; then
        cp backend/env.template backend/.env
        echo "✅ .env file created"
        echo ""
        echo "⚠️  IMPORTANT: Edit backend/.env and set your DB_PASSWORD"
    else
        echo "❌ env.template not found"
        exit 1
    fi
fi

echo ""
echo "========================================"
echo "✅ Setup checks complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env and set DB_PASSWORD"
echo "2. Run: cd backend && npm run init-db"
echo "3. Start backend: npm run dev"
echo ""
echo "For detailed instructions, see:"
echo "  - QUICK_DATABASE_SETUP.md"
echo "  - DATABASE_SETUP.md"
echo ""


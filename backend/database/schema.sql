-- Database schema for JP Construction Backend
-- Create database: CREATE DATABASE jp_construction;

-- Contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    project_type VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- Projects table for storing project portfolio
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL CHECK (category IN ('commercial', 'residential', 'industrial')),
    title VARCHAR(200) NOT NULL,
    title_en VARCHAR(200),
    location VARCHAR(200),
    location_en VARCHAR(200),
    date VARCHAR(50),
    date_en VARCHAR(50),
    image VARCHAR(500),
    description_en TEXT,
    simple_description TEXT,
    simple_description_en TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample projects data (matching frontend data)
INSERT INTO projects (category, title, title_en, location, location_en, date, date_en, image, description_en, simple_description, simple_description_en) VALUES
('commercial', '事務所解体', 'Multi-Story Office and Nursery School Demolition', '東京都舟渡', 'Funato, Tokyo', '2024年3月', 'March 2024', '/images/WhatsApp Image 2025-09-18 at 20.46.50 (1).jpeg', 'Demolition of multi-story office and nursery school', '事務所と保育園の解体プロジェクト', 'Office and nursery school demolition project'),
('residential', '保育園解体', 'Tokyo Office Demolition', '東京都板橋', 'Itabashi, Tokyo', '2024年1月', 'January 2024', '/images/WhatsApp Image 2025-09-18 at 20.46.50 (2).jpeg', 'Demolition of an office in Tokyo', '東京都内の事務所解体', 'Tokyo office demolition'),
('industrial', '6階建解体工事  階上解体', '6-Story Building Demolition', '埼玉県春日部', 'Kasukabe, Saitama', '2023年12月', 'December 2023', '/images/WhatsApp Image 2025-09-18 at 20.46.50 (3).jpeg', 'Demolition of a 6-story building', '6階建て建物の解体', '6-story building demolition')
ON CONFLICT DO NOTHING;


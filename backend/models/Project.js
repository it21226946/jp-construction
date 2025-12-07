import pool from '../config/database.js';

export const createProject = async (projectData) => {
  const {
    category,
    title,
    titleEn,
    location,
    locationEn,
    date,
    dateEn,
    image,
    descriptionEn,
    simpleDescription,
    simpleDescriptionEn
  } = projectData;
  
  const query = `
    INSERT INTO projects (
      category, title, title_en, location, location_en, 
      date, date_en, image, description_en, 
      simple_description, simple_description_en, created_at
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW())
    RETURNING *
  `;
  
  const values = [
    category,
    title,
    titleEn,
    location,
    locationEn,
    date,
    dateEn,
    image,
    descriptionEn,
    simpleDescription,
    simpleDescriptionEn
  ];
  
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

export const getAllProjects = async (category = null, limit = 50, offset = 0) => {
  let query = 'SELECT * FROM projects';
  const params = [];
  
  if (category && category !== 'all') {
    query += ' WHERE category = $1';
    params.push(category);
  }
  
  query += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
  params.push(limit, offset);
  
  try {
    const result = await pool.query(query, params);
    return result.rows;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getProjectById = async (id) => {
  const query = 'SELECT * FROM projects WHERE id = $1';
  
  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

export const updateProject = async (id, projectData) => {
  const {
    category,
    title,
    titleEn,
    location,
    locationEn,
    date,
    dateEn,
    image,
    descriptionEn,
    simpleDescription,
    simpleDescriptionEn
  } = projectData;
  
  const query = `
    UPDATE projects SET
      category = $1,
      title = $2,
      title_en = $3,
      location = $4,
      location_en = $5,
      date = $6,
      date_en = $7,
      image = $8,
      description_en = $9,
      simple_description = $10,
      simple_description_en = $11,
      updated_at = NOW()
    WHERE id = $12
    RETURNING *
  `;
  
  const values = [
    category,
    title,
    titleEn,
    location,
    locationEn,
    date,
    dateEn,
    image,
    descriptionEn,
    simpleDescription,
    simpleDescriptionEn,
    id
  ];
  
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (id) => {
  const query = 'DELETE FROM projects WHERE id = $1 RETURNING *';
  
  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};


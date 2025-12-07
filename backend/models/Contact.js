import pool from '../config/database.js';

export const createContact = async (contactData) => {
  const { name, email, phone, projectType, message } = contactData;
  
  const query = `
    INSERT INTO contacts (name, email, phone, project_type, message, created_at)
    VALUES ($1, $2, $3, $4, $5, NOW())
    RETURNING *
  `;
  
  const values = [name, email || null, phone || null, projectType || null, message || null];
  
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

export const getAllContacts = async (limit = 50, offset = 0) => {
  const query = `
    SELECT * FROM contacts
    ORDER BY created_at DESC
    LIMIT $1 OFFSET $2
  `;
  
  try {
    const result = await pool.query(query, [limit, offset]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const getContactById = async (id) => {
  const query = 'SELECT * FROM contacts WHERE id = $1';
  
  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching contact:', error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  const query = 'DELETE FROM contacts WHERE id = $1 RETURNING *';
  
  try {
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};


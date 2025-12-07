import express from 'express';
import { body, validationResult } from 'express-validator';
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from '../models/Project.js';

const router = express.Router();

// Validation rules for project
const projectValidation = [
  body('category')
    .notEmpty()
    .withMessage('カテゴリは必須です / Category is required')
    .isIn(['commercial', 'residential', 'industrial'])
    .withMessage('無効なカテゴリです / Invalid category'),
  body('title')
    .trim()
    .notEmpty()
    .withMessage('タイトルは必須です / Title is required')
    .isLength({ max: 200 })
    .withMessage('タイトルは200文字以内で入力してください / Title must be less than 200 characters'),
  body('titleEn')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('English title must be less than 200 characters'),
  body('location')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('所在地は200文字以内で入力してください / Location must be less than 200 characters'),
  body('locationEn')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Location (English) must be less than 200 characters'),
  body('date')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('日付は50文字以内で入力してください / Date must be less than 50 characters'),
  body('dateEn')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Date (English) must be less than 50 characters'),
  body('image')
    .optional()
    .trim()
    .isURL()
    .withMessage('有効な画像URLを入力してください / Please enter a valid image URL'),
  body('descriptionEn')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('説明は1000文字以内で入力してください / Description must be less than 1000 characters'),
  body('simpleDescription')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('簡単な説明は500文字以内で入力してください / Simple description must be less than 500 characters'),
  body('simpleDescriptionEn')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Simple description (English) must be less than 500 characters'),
];

// GET /api/projects - Get all projects (with optional category filter)
router.get('/', async (req, res) => {
  try {
    const category = req.query.category || null;
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;
    
    const projects = await getAllProjects(category, limit, offset);
    
    res.json({
      success: true,
      data: projects,
      pagination: {
        limit,
        offset,
        count: projects.length,
        category: category || 'all',
      },
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch projects',
    });
  }
});

// GET /api/projects/:id - Get a specific project
router.get('/:id', async (req, res) => {
  try {
    const project = await getProjectById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      });
    }
    
    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch project',
    });
  }
});

// POST /api/projects - Create a new project
router.post('/', projectValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array(),
      });
    }

    const project = await createProject(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project,
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create project',
    });
  }
});

// PUT /api/projects/:id - Update a project
router.put('/:id', projectValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array(),
      });
    }

    const project = await updateProject(req.params.id, req.body);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      });
    }
    
    res.json({
      success: true,
      message: 'Project updated successfully',
      data: project,
    });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update project',
    });
  }
});

// DELETE /api/projects/:id - Delete a project
router.delete('/:id', async (req, res) => {
  try {
    const project = await deleteProject(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      });
    }
    
    res.json({
      success: true,
      message: 'Project deleted successfully',
      data: project,
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete project',
    });
  }
});

export default router;


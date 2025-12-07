import express from 'express';
import { body, validationResult } from 'express-validator';
import { createContact, getAllContacts, getContactById, deleteContact } from '../models/Contact.js';
import { sendContactNotification } from '../config/email.js';

const router = express.Router();

// Validation rules for contact form
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('名前は必須です / Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('名前は2文字以上100文字以下で入力してください / Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('メールアドレスは必須です / Email is required')
    .isEmail()
    .withMessage('有効なメールアドレスを入力してください / Please enter a valid email address')
    .normalizeEmail(),
  body('phone')
    .optional()
    .trim()
    .matches(/^[\d\s\-\+\(\)]+$/)
    .withMessage('有効な電話番号を入力してください / Please enter a valid phone number'),
  body('projectType')
    .optional()
    .isIn(['residential', 'commercial', 'industrial', 'emergency', ''])
    .withMessage('無効なプロジェクトタイプです / Invalid project type'),
  body('message')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('メッセージは2000文字以内で入力してください / Message must be less than 2000 characters'),
];

// POST /api/contact - Create a new contact inquiry
router.post('/', contactValidation, async (req, res) => {
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

    // Create contact in database
    const contact = await createContact(req.body);

    // Send email notification (non-blocking)
    sendContactNotification(req.body).catch((error) => {
      console.error('Failed to send email notification:', error);
      // Don't fail the request if email fails
    });

    res.status(201).json({
      success: true,
      message: 'お問い合わせありがとうございます。近日中にご連絡いたします。 / Thank you for your inquiry. We will contact you soon.',
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
      },
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: '送信中にエラーが発生しました。後でもう一度お試しください。 / An error occurred while sending. Please try again later.',
    });
  }
});

// GET /api/contact - Get all contacts (admin only - add authentication in production)
router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;
    
    const contacts = await getAllContacts(limit, offset);
    
    res.json({
      success: true,
      data: contacts,
      pagination: {
        limit,
        offset,
        count: contacts.length,
      },
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contacts',
    });
  }
});

// GET /api/contact/:id - Get a specific contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await getContactById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found',
      });
    }
    
    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact',
    });
  }
});

// DELETE /api/contact/:id - Delete a contact (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const contact = await deleteContact(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found',
      });
    }
    
    res.json({
      success: true,
      message: 'Contact deleted successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete contact',
    });
  }
});

export default router;


const Contact = require('../models/contactModel');

/**
 * @desc    Create a new contact form submission
 * @route   POST /api/contact
 * @access  Public
 */
const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    // Get client IP address and user agent
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('user-agent') || '';

    // Create new contact
    const contact = await Contact.create({
      name,
      email,
      phone: phone || undefined, // Only set if provided
      service: service || undefined, // Only set if provided
      message,
      ipAddress,
      userAgent
    });

    // In a real application, you might want to send an email notification here
    // await sendContactEmail(contact);


    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    // Handle duplicate key error (e.g., if you have a unique index on email)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'You have already submitted a message. We will get back to you soon.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * @desc    Get all contact form submissions (protected route)
 * @route   GET /api/contact
 * @access  Private/Admin
 */
const getContacts = async (req, res) => {
  try {
    // In a real application, you would want to implement pagination and filtering
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  submitContactForm,
  getContacts
};

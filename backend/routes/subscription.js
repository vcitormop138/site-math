const express = require('express');
const router = express.Router();
const { createStripeSession, checkSubscription } = require('../controllers/subscriptionController');
const { isAuth } = require('../middleware/auth');

router.post('/create-checkout-session', isAuth, createStripeSession);
router.get('/check', isAuth, checkSubscription);

module.exports = router;
const express = require('express');
const router = express.Router();

const { sendEmail } = require('../controller/email');

router.route('/sendmail').post(sendEmail);

module.exports = router;
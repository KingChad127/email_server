const express = require('express');
const router = express.Router();

const transport = require('../email_service/transport');
const sendEmail = require('../email_service/send_email');

let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: null,
    subject: "Ride Confirmed!",
    text: "Details for your ride."
};

router.post('/', (req, res) => sendEmail.send(req, res, transport, mailOptions));

module.exports = router;
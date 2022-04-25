require('dotenv').config();
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    }
})

module.exports = transport;
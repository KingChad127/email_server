require('dotenv').config();
const nodemailer = require('nodemailer');

function sendEmail(mailOptions) {
    let response = {};

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        }
    });

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            response(err, null);
        } else {
            response(null, info);
        }
    });
}

module.exports = {
    sendEmail
};
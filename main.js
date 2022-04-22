require('dotenv').config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = 3000;

app.listen(port, () => {
    console.log(`nodemailer listening at http://localhost:${port}`);
});

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    }
});

let receiver = "abhinav.chadaga@utexas.edu";

let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: receiver,
    subject: "Test message",
    text: "Test Message",
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Email sent from kingchad127@gmail.com to ${receiver}`);
    }
});
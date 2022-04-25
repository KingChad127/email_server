const express = require('express');
const router = express.Router();

const emailService = require('../email_transport');

router.post('/', async (req, res) => {
    let mailOptions = {};
    console.log(JSON.stringify(req.body));
    if ("from" in req.body && "to" in req.body &&
        "subject" in req.body && "text" in req.body) {
        mailOptions = {
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text
        };
    } else {
        res.json({ "message": "invalid request" }).status(500);
    }

    emailService.sendEmail(mailOptions, (error, info) => {
        if (error) {
            res.json({ "message": "email failed to send" }).status(500);
        } else {
            console.log(info);
            res.json({ "message": "success" }).status(200);
        }
    });
});

module.exports = router;
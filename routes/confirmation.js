const express = require('express');
const router = express.Router();

const transport = require('../transport');

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

    transport.sendMail(mailOptions, (error, info) => {
        if (info) {
            console.log(info);
            res.json({ "message": "email sent" }).status(200);
        } else {
            console.log(error);
            res.json({ "message": "email failed to send" }).status(500);
        }
    })
});

module.exports = router;
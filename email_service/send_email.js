function send(req, res, transport, mailOptions) {
    console.log(JSON.stringify(req.body));
    if ("to" in req.body) {
        mailOptions.to = req.body.to;
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
    });
}

module.exports = { send };
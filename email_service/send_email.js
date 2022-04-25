function send(req, res, transport, mailOptions) {
    console.log(JSON.stringify(req.body));
    if ("to" in req.body) {
        mailOptions.to = req.body.to;
    } else {
        res.json({ "message": "invalid request" }).status(500);
    }

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ "message": "email failed to send" });
        } else {
            console.log(info);
            res.status(200).json({ "message": "email sent" });
        }
    });
}

module.exports = { send };
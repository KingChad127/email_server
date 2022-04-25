const express = require('express');
const app = express();
const port = 3000;

// enable CORS
const cors = require('cors');
app.use(cors());

// import body parser
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    // Handling potential/prevent CORS issues 
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const welcomeRouter = require('./routes/welcome');
const confirmationRouter = require('./routes/confirmation');

app.use('/welcome', welcomeRouter);
app.use('/confirmation', confirmationRouter);

app.listen(port, () => console.log(`nodemailer listening on port ${port}`));
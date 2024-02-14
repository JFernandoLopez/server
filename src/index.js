const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { router } = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());

app.name = 'API';
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(router);

module.exports = {
    app
}
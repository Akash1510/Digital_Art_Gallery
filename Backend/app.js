const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const auth = require('../Backend/Router/auth');
const Post = require('../Backend/Router/Posts');
const feature = require('../Backend/Router/feature');
const bodyParser = require('body-parser');
// Middleware
dotenv.config();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json({ extended: false }));
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/api/v1', auth);
app.use('/api/v1', Post);
app.use('/api/v1', feature);

module.exports = app;

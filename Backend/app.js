const express = require('express');
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const auth = require('../Backend/Router/auth')


// Middleware
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(morgan('dev'));
app.use('/api/v1',auth)
module.exports = app
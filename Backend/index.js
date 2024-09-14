
const app = require('./app')
const dotenv = require('dotenv');
const connection = require('./DB/connect')
dotenv.config();
const port = process.env.PORT || 5000

connection()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
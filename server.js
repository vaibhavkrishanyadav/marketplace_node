const express = require('express');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
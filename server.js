const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/category/product', require('./routes/productRoutes'));
app.use('/api/category', require('./routes/categoryRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
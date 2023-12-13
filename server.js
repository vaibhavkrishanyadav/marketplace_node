const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
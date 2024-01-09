const mongoose = require('mongoose');
const Product = require('../models/productModel');

const categorySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add the title"],
        },
        owner_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        description: {
            type: String,
            required: [true, "Please add the desription"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Category', categorySchema);
const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
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
        price: {
            type: String,
            required: [true, "Please add the price"],
        },
        category_id: {
            type: String,
            required: [true, "Please add the category Id"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Products', productSchema);
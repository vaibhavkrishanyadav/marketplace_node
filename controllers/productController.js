const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

//@desc Get all products of a category
//@route GET /api/category/product
//@access private
const getAllProduct = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { category_id } = req.body;
    if(!category_id) {
        res.status(400);
        throw new Error("Category Id not found");
    }
    const product = await Product.find({ category_id: category_id });
    res.status(200).json(product);
});

//@desc Create new product
//@route POST /api/category/product
//@access private
const createProduct = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const {title, description, price, category_id} = req.body;
    if(!title || !description || !price || !category_id) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const product = await Product.create({
        title, 
        description,
        owner_id: req.user.id,
        price,
        category_id,
    });
    res.status(201).json(product);
});

//@desc Get product
//@route GET /api/category/product/:id
//@access private
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    res.status(200).json(note);
});

//@desc Update product
//@route PUT /api/category/product/:id
//@access private
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) {
        res.status(404);
        throw new Error("Product not found");
    }

    if( product.owner_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other product");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedProduct);
});

//@desc Delete product
//@route DELETE /api/category/:id
//@access private
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    
    if( product.owner_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other product");
    }

    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json(product);
});

module.exports = {getAllProduct, getProduct, createProduct, updateProduct, deleteProduct};
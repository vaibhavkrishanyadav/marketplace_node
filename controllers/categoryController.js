const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');

//@desc Get all category
//@route GET /api/category
//@access private
const getCategory = asyncHandler(async (req, res) => {
    const category = await Category.find({ owner_id: req.user.id });
    res.status(200).json(category);
});

//@desc Create new category
//@route POST /api/category
//@access private
const createCategory = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const {title, description} = req.body;
    if(!title || !description) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const category = await Category.create({
        title, 
        description,
        owner_id: req.user.id,
    });
    res.status(201).json(category);
});

//@desc Update category
//@route PUT /api/category/:id
//@access private
const updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if(!category) {
        res.status(404);
        throw new Error("Category not found");
    }

    if( category.owner_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other category");
    }

    const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedCategory);
});

//@desc Delete category
//@route DELETE /api/category/:id
//@access private
const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if(!category) {
        res.status(404);
        throw new Error("Category not found");
    }
    
    if( category.owner_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other category");
    }

    await Category.deleteOne({ _id: req.params.id });
    res.status(200).json(category);
});

module.exports = {getCategory, createCategory, updateCategory, deleteCategory};
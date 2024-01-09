const express = require('express');
const router = express.Router();
const {getProduct, createProduct, updateProduct, deleteProduct, getAllProduct} = require("../controllers/productController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route('/').get(getAllProduct).post(createProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
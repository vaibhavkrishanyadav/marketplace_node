const express = require('express');
const router = express.Router();
const {getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/productController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route('/').post(createProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
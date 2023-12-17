const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

// router.route('/').get(getUser);
// router.get('/get', getUser);

module.exports = router;
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = (req, res) => {
    res.status(200).json({ message: 'User registered'})
};


//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = (req, res) => {
    res.status(200).json({ message: 'User login succesful'})
};


//@desc Current user info
//@route GET /api/users/current
//@access private
const currentUser = (req, res) => {
    res.status(200).json({ message: 'Current user'})
};

module.exports = {  registerUser, loginUser, currentUser };
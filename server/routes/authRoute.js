const express = require('express');
const router = express.Router();
const auth = require('../controller/authController');
const authMiddleware = require('../middlewares/authMiddleware')

//Post
router.post('/login',auth.login);
router.post('/register',auth.register);
router.post('/logout',auth.logout);


//Get
router.get('/profile',authMiddleware,auth.profile)


module.exports  = router;
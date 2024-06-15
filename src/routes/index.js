const express = require('express');
const routerUser = require('./user.router');
const routerPost = require('./post.router');
const router = express.Router();

// colocar las rutas aquí
//? USERS
router.use('/users', routerUser)

//? POST
router.use('/posts',routerPost)
module.exports = router;
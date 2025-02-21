const express = require('express')
const router = express.Router();
const { body } = require("express-validator")
const PostsController = require('../controllers/posts.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/create', authMiddleware.authAdmin ,[
  body('title').isString().withMessage('title must be a string'), 
  body('caption').isString().withMessage('Caption must be a string'), 
  body('contentType').isString().withMessage('Content type must be a string'), 
  body('link').isArray().withMessage('Link must be at least 3 characters long'),
], authMiddleware.authAdmin ,PostsController.CreatePosts)

router.get('/' ,
    PostsController.GetPosts )

router.get('/details',PostsController.GetPost )

module.exports = router;
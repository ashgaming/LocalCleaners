const postsService = require('../services/posts.service')
const { validationResult } = require('express-validator')

module.exports.CreatePosts = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const {   title,  caption,  contentType, link } = req.body

        const plans = await postsService.createPosts({
            user:req.user,
            title,
            caption,
            contentType,
            link
        });


        res.status(201).json({ plans })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}


module.exports.GetPosts = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const posts = await postsService.getPosts()


        res.status(201).json({ posts })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}

module.exports.GetPost = async (req, res, next) => {

    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const post = await postsService.createPosts()


        res.status(201).json({ post })
    } catch (error) {
        res.status(400).json({ errors: error })
        console.log(error)
    }
}

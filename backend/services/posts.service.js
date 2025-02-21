const postsModel = require('../models/posts.model')


module.exports.createPosts = async ({
    user,
    title,
    caption,
    contentType,
    link
}) => {

    if (!user || !title ||   !caption || !contentType ||  !link) {
        throw new Error('All fiels are required');
    }


    const post = await postsModel.create({
        user: user._id,
        title,
        caption,
        contentType,
        link,
        createdAt:Date.now()
    })

    return post;

}

module.exports.getPosts = async () => {

    const posts = await postsModel.find().populate().exec()


    return posts;
}


module.exports.getPost = async ({ id }) => {

    if (!id) {
        throw new Error('id not found');
    }

    const posts = await postsModel.find({
        _id:id
    }).populate().exec()


    return posts;
}
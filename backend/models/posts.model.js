const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true,
        minlength: [5, 'title must be 5 character long']
    },
    caption: {
        type: String,
        required: true,
        minlength: [5, 'caption must be 5 character long']
    },
    contentType: {
        type: String,
        required: true,
        enum: ['text', 'image', 'images', 'video']
    },
    link: {
        type: [String],
        required: true,
    },
    like: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})



const postsModel = mongoose.model('posts', postsSchema);

module.exports = postsModel;
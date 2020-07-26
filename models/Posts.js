const mongoose = require('mongoose')


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descrition: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Post = mongoose.model('posts', PostSchema)

module.exports = Post
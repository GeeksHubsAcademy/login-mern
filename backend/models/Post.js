const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const PostSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    image: String,
    message: String,
    likes: [ObjectId],
    dislikes: [ObjectId]
}, {
    timestamps: true
})
const Post = mongoose.model('Post', PostSchema)
module.exports = Post
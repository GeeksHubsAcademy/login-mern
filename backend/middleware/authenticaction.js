const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const Post = require('../models/Post.js');
const { jwt_auth_secret } = require('../config/keys')
const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_auth_secret);
        const user = await User.findOne({
            _id: payload._id,
            tokens: token
        });
        if (!user) {
            return res.status(401).send({
                message: 'You are not authorized'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        res.status(401).send({
            message: 'You are not authorized',
            error
        })
    }
}
const isAuthor = async(req, res, next) => {
    try {

        const post = await Post.findById(req.params.post_id);
        if (post.user.toString() !== req.user._id.toString()) {
            return res.status(403).send({
                message: 'You are not the author'
            });
        }
        next()
    } catch (error) {
        return res.status(403).send({
            message: 'You are not the author',
            error
        });
    }
}
module.exports = {
    authentication,
    isAuthor
}
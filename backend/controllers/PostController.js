const Post = require('../models/Post');

const PostController = {
    getAll(req, res) {
        Post.find()
            .then(posts => res.send(posts))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    insert(req, res) {
        Post.create({...req.body, user: req.user._id })
            .then(post => res.status(201).send(post))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    update(req, res) {
        Post.findByIdAndUpdate(req.params.post_id, {...req.body, user: req.user._id }, { new: true })
            .then(post => res.send(post))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    delete(req, res) {
        Post.findByIdAndDelete(req.params.post_id)
            .then(post => res.send(post))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    searchByMessage(req, res) {
        const search = new RegExp(req.params.search, 'i')
        Post.find({ message: search })
            .populate('user')
            .then(posts => res.send(posts))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },

}
module.exports = PostController;
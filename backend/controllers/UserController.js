const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
    jwt_auth_secret
} = require('../config/keys');
const UserController = {
    getAll(req, res) {
        User.find()
            .populate('followers')
            .populate('following')
            .then(users => res.send({ users, user: req.user }))
            .catch(console.error)
    },
    async register(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9)
            const user = await User.create(req.body);
            res.status(201).send({
                user,
                message: 'Usuario creado con éxito'
            })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'Hubo un problema al intentar registrar al usuario',
                error
            })
        }
    },
    getInfo(req, res) {
        User.findById(req.user._id)
            .populate('followers')
            .populate('following')
            .then((user) => res.send(user))
            .catch(console.error);
    },
    async follow(req, res) {
        try {
            const isSameUser = req.params.user_id === '' + req.user._id;
            const isAlreadyFollowingUser = req.user.following.includes(req.params.user_id);
            let user = req.user;
            if (!isAlreadyFollowingUser && !isSameUser) {
                user = await User.findByIdAndUpdate(req.user._id, {
                    $push: {
                        following: req.params.user_id
                    }
                }, {
                    new: true
                });
                console.log(user.following)
                await User.findByIdAndUpdate(req.params.user_id, {
                    $push: {
                        followers: req.user._id
                    }
                });
            }
            console.log(user.following)
            res.send(user)
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'There was a problem trying to follow'
            })
        }
    },
    async unfollow(req, res) {
        try {
            const isSameUser = req.params.user_id === '' + req.user._id;
            const isAlreadyFollowingUser = req.user.following.includes(req.params.user_id);
            let user = req.user;
            if (isAlreadyFollowingUser && !isSameUser) {
                user = await User.findByIdAndUpdate(req.user._id, {
                    $pull: {
                        following: req.params.user_id
                    }
                }, {
                    new: true
                });
                console.log(user.following)
                await User.findByIdAndUpdate(req.params.user_id, {
                    $pull: {
                        followers: req.user._id
                    }
                });
            }
            console.log(user.following)
            res.send(user)
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'There was a problem trying to unfollow'
            })
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email
            });
            if (!user) {
                return res.status(400).send({
                    message: 'Email o contraseña incorrectos'
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Email o contraseña incorrectos'
                })
            }
            const token = jwt.sign({
                _id: user._id
            }, jwt_auth_secret);
            if (user.tokens.length > 4) user.tokens.shift();
            user.tokens.push(token);
            await user.replaceOne(user);
            res.send({
                user,
                token,
                message: 'Conectado con éxito'
            })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'Hubo un problema al intentar conectar al usuario'
            })
        }
    },
    logout(req, res) {
        User.findByIdAndUpdate(req.user._id, { $pull: { tokens: req.headers.authorization } })
            .then(() => res.send({ message: 'Desconectado con éxito' }))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar conectar al usuario'
                })
            })
    }
}

module.exports = UserController;
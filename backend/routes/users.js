const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const {authentication} = require('../middleware/authenticaction')
router.get('/',authentication, UserController.getAll);
router.get('/info',authentication, UserController.getInfo);
router.get('/follow/:user_id',authentication, UserController.follow);
router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports=router;
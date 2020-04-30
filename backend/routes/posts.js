const router = require('express').Router();
const PostController = require('../controllers/PostController.js');
const { authentication, isAuthor } = require('../middleware/authenticaction')
router.get('/:page', authentication, PostController.getAll);
router.get('/search/:pedro', authentication, PostController.searchByMessage);
router.post('/', authentication, PostController.insert);
router.put('/:post_id', authentication, isAuthor, PostController.update);
router.delete('/:post_id', authentication, isAuthor, PostController.delete);

module.exports = router;
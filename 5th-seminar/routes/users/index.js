const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/', userController.readAll);
router.get('/:id', userController.readOne);
router.delete('/:id', userController.delete);
router.put('/:id', userController.update);

module.exports = router;
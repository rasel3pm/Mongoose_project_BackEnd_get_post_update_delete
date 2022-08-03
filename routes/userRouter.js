const router = require('express').Router();
const { getUserCreate, getUser, userPatch, userDelete } = require('../controller/user.controller');
const User = require('../model/userModel')



//Create Router
router.post('/create', getUserCreate)

//get Router
router.get('/', getUser);


router.patch('/:id', userPatch);

router.delete('/:id', userDelete)


module.exports = router
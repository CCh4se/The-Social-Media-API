const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addUser,
    removeUser,
} = require('../../controllers/userController');

router.route('/')
.get(getUser)
.post(createUser);

router.route('/:user')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:user/reac')


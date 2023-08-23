const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFollower,
    removeFollower,
} = require('../../controllers/userController');

router.route('/')
.get(getUser)
.post(createUser);

router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/follower/:followerId')
.post(addFollower)
.delete(removeFollower);

module.exports = router;
const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/')
.get(getThought)
.post(createThought);

router.route('/:thought')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reaction')
.post(addReaction);

router.route(':/thoughtId/reaction/:reactionId')
.delete(deleteReaction);


module.exports = router;
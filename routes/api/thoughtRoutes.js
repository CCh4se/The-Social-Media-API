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
.delete(deleteReaction);

router.route('/:thought/reaction')
.post(addReaction);

router.route(':/thought/reaction/:reaction')
.delete(deleteReaction);


module.exports = router;
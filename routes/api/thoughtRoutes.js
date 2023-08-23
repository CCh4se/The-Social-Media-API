const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addMood,
    deleteMood,
} = require('../../controllers/thoughtController');

router.route('/')
.get(getThought)
.post(createThought);

router.route('/:thought')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/mood')
.post(addMood);

router.route(':/thoughtId/mood/:moodId')
.delete(deleteMood);


module.exports = router;
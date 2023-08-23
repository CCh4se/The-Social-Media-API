const { Schema, model } = require('mongoose');
const moodSchema = new Schema(
    { 
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    moodId: {
        type: Schema.Types.objectId,
        ref: "mood",
    },
    moodBody: {
        type: String, 
        require: true,
        maxlength: 250
    },
},
{
    toJSON: {
    virtuals: true,
    getters: true
    },
    id: false,
},
)

const thoughtSchema = new Schema ({
    username: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    thoughtId: {
        type: Schema.Types.objectId,
        ref: "thought",
    },
    thoughtBody: {
        type: String,
        require: true,
        maxlength: 250
    }, 
    moods: [moodSchema],
},
{
    toJSON: {
    virtuals: true,
    getters: true
    },
    id: false,
},
)

// having issue with the count

const thought = model('thought', thoughtSchema);

module.exports = thought;
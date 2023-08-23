const { Schema, model } =require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^.+@.+\..+$/],
        },
        thought: [
            {
                types: Schema.Types.ObjectId,
                ref: 'thought'
            },
        ],
        follower: [
            {
                types: Schema.Types.ObjectId,
                ref: "follower"
            },
        ],
        },
        {
            toJSON: {
              virtuals: true,
              getters: true,
            },
            id: false
    },   
);

// having issue with the count

const user = model('user', userSchema);

module.exports = user;

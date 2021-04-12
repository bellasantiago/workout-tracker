const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            
        },
        name: {

        },
        duration: {

        },
        weight: {

        },
        reps: {

        },
        sets: {

        },
        distance: {

        },

    }]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
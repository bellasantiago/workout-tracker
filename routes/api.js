const path = require("path");
const router = require("express").Router();
const { Workout } = require("../models/index.js");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Create new workout
router.post("/workouts", (req, res) => {
    Workout.create()
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Request all of the workouts
router.get("/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ]).then(result => {
        res.json(result)
    })
        .catch(err => {
            res.status(400).json(err)
        })
});

// Add new exercise to workout
router.put('/api/workouts/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then(workout => {
            workout.exercises.push(req.body)
            Workout.updateOne({ _id: req.params.id }, workout, (err, result) => {
                res.json(workout)
            })
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router;
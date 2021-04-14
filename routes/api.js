const path = require ("path");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"))
});

router.get("/excercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/stats.html"))
});

module.exports = router;
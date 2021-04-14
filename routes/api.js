const router = require("express").Router();
const Workout = require("../models/index.js");

router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"))
});

module.exports = router;
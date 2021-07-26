const router = require("express").Router();
const axios = require('axios');
const User = require('../models/User')
const UserInput = require('../models/UserInput')

//rendering homepage, no need to log-in
router.get("/", (req, res, next) => {
    res.render('HomePage');
});



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

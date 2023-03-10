const router = require("express").Router();

const User = require("../../models/userModel");
const config = require("config")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const JWT_SECRET = config.get("jwtSecret")

router.get("/", (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})



module.exports = router;

const router = require("express").Router();

const User = require("../../models/userModel");
const config = require("config")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// router.get("/", (req, res) => {
//     res.send("Hiii")
// })

router.post("/", (req, res) => {
    const { email, password, name } = req.body;
    console.dir(req.body.name)
    console.log(email);

    if (!name || !email || !password) {
        res.status(400).json({ msg: "bad request" })
    }

    User.findOne({ email }).then(user => {
        if (user) {
            return res.status(400).json({ msg: "User Already exists" })
        } else {
            const user = new User({
                name,
                email,
                password
            })

            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;

                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    user.save().then(user => {
                        res.status(200).json({
                            user: {
                                name: user.name,
                                id: user.id,
                                email: user.email

                            },
                            msg: "user created"
                        })
                    })

                })

            })



        }

    })
})


module.exports = router;

const router = require("express").Router();

const User = require("../../models/userModel");
const config = require("config")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const checkToken = require("../../middleware/checkToken");
const JWT_SECRET = config.get("jwtSecret")

router.get("/", checkToken, (req, res) => {
    User.findById(req.user.id)
        .select("-password")

        .then(user => res.json(user))
})

router.post("/signin", (req, res) => {
    const { password, email } = req.body;
    console.dir(req.body.name)
    console.log(email);

    if (!email || !password) {
        res.status(400).json({ msg: "bad request" })
    }

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({ msg: "User doesn't exist" })
        }
        else {

            bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch) {
                    return res.status(400).json({ msg: "Wrong credential" })
                }



                const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 3600 });

                res.status(200).json({
                    token,
                    user: {
                        name: user.name,
                        id: user.id,
                        email: user.email

                    },
                    msg: "user logged in"
                })


            })





        }

    })
})

router.post("/signup", (req, res) => {
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
                        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 3600 });

                        res.status(200).json({
                            token,
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

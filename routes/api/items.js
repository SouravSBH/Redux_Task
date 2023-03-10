const express = require("express");
const router = express.Router();
const checkToken = require("../../middleware/checkToken")

const Item = require("../../models/item");

//@route GET api/items
router.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
    // res.send("Hiii")
})

//@route Post api/items
router.post("/", checkToken, (req, res) => {

    const newItem = new Item({
        name: req.body.name,
        // addedBy: req.user.id,

    })
    newItem.save().then((item) => res.json({ ...item._doc, addedBy: req.user.id }))

})

router.delete("/:id", checkToken, (req, res) => {
    Item.findById(req.params.id)
        .then(i => {
            console.dir(i);
            i.deleteOne()
                .then(() => res.json({ success: true }))
        }

        )
        .catch(e => {
            console.log(e);
            res.status(500).json({ success: false })
        })
})
module.exports = router;

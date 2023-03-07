const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require("./routes/api/items")


const db = require("./config/keys.js").mongoURI;
const app = express();


app.use(bodyParser.json())

console.log(db);
mongoose.connect(db).
    then(() => {
        console.log("connected")
    }).
    catch((e) => { console.log(e) });



app.use("/api/items", items)

const port = process.env.PORT || 5001;




app.listen(port, () => { console.log("Server Started " + port) })
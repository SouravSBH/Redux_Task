const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const config = require("config")
const items = require("./routes/api/items")


// const db = require("./config/keys.js").mongoURI;
const db = config.get("mongoURI")
const app = express();

app.use(cors())


app.use(express.json())

console.log(db);
mongoose.connect(db).
    then(() => {
        console.log("connected")
    }).
    catch((e) => { console.log(e) });



app.use("/api/items", items);
app.use("/api/auth",
    // (req, res) => { res.json({ connected: "Hiii" }) }
    require("./routes/api/auth")

)

const port = process.env.PORT || 5001;




app.listen(port, () => { console.log("Server Started " + port) })
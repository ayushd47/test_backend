const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./database/config");

const contactRoute = require('./routes/contactRoute');




const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(contactRoute);
const port = process.env.PORT || 1000;
app.listen(port, () => {
    console.log(`Server running on Port || ${port}`);
})
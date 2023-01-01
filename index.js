const express = require("express");
const app = express();
const cors = require('cors');

const {getDate} = require('./models/querys')
app.use(express.static('public'))
app.use(cors())
app.use(express.json());

app.listen(3000, console.log("¡Servidor encendido!"));

app.get("/", (req, res) => {
    try {
        return res.sendFile(__dirname + "/public/index.html")
    } catch (error) {
        res.status(404).send(error)
    }
})
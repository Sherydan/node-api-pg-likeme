const express = require("express");
const app = express();
const cors = require('cors');

const {getDate} = require('./models/querys')
app.use(express.static('public'))
app.use(cors())
app.use(express.json());

app.listen(3000, console.log("¡Servidor encendido!"));

getDate()
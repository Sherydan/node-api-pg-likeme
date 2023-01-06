const express = require("express");
const app = express();
const cors = require("cors");
const CsbInspector = require('csb-inspector');

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
CsbInspector();



app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app;
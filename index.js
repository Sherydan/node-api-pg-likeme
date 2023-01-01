const express = require("express");
const app = express();
const cors = require('cors');
var morgan = require('morgan')

const CsbInspector = require('csb-inspector')
CsbInspector()

const {getPosts, addPost} = require('./models/querys')
app.use(express.static('public'))
app.use(cors())
app.use(express.json());

app.use(morgan('tiny'))

app.listen(3000, console.log("¡Servidor encendido!"));


app.get("/", (req, res) =>{
    try {
        return res.sendFile(__dirname + "/public/index.html")
    } catch (error) {
        res.status(404).send(error)
    }
})

app.get("/posts", async (req, res) => {
    const posts = await getPosts();
    res.json(posts)
})

app.post("/posts", async (req,res) => {
    const payload = req.body
    await addPost(payload)
})



const app = require('./server')

app.use('/', require('./routes/postsRoutes'))

app.get("/", (req, res) => {
    try {
        return res.sendFile(__dirname + "/public/index.html");
    } catch (error) {
        res.status(404).send(error);
    }
});



module.exports = app
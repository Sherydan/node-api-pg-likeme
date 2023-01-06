const { getPosts, addPost  } = require("../models/querys")

const getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts()
        res.json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error while obtaining data"})
    }
}

const addNewPost = async (req, res) => {
    try {
        const newPost = addPost(req.body)
        res.json(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error adding new post"});
        
    }
}

module.exports = {
    getAllPosts,
    addNewPost,
}
const { getPosts, addPost, addLike, findPost, deletePost } = require("../models/querys");

const getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while obtaining data" });
    }
};

const addNewPost = async (req, res) => {
    try {
        const newPost = addPost(req.body);
        res.json(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding new post" });
    }
};

const addLikePost = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    payload.id = id;
    try {
        const existsPost = await findPost(id)
        if (existsPost.length === 0) {
            return res.status(404).json({message: "posts doesnt exists"})
        }
        
        const newLike = await addLike(payload)
        res.json(newLike)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error adding or updating like"})
    }
};

const deletePostById = async (req, res) => {
    const { id } = req.params

    try {
        const existsPost = await findPost(id)
        console.log(existsPost);

        if (existsPost.length === 0) {
            return res.status(404).json({message: "posts doesnt exists"})
        }

        await deletePost(id)
        res.status(200).json({message: "Post deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "error while deleting post"})
    }
}

module.exports = {
    getAllPosts,
    addNewPost,
    addLikePost,
    deletePostById,
};

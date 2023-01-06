const express = require('express')
const router = express.Router()

const { getAllPosts, addNewPost, addLikePost, deletePostById } = require('../controllers/postsController')

router.get('/posts', getAllPosts)
router.post('/posts', addNewPost)
router.put('/posts/like/:id', addLikePost)
router.delete('/posts/:id', deletePostById )


module.exports = router
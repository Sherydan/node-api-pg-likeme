const express = require('express')
const router = express.Router()

const { getAllPosts, addNewPost } = require('../controllers/postsController')

router.get('/posts', getAllPosts)
router.post('/posts', addNewPost)
// router.put('/travels/:id', updateTravelById)
// router.delete('/travels/:id', deleteTravelById)


module.exports = router
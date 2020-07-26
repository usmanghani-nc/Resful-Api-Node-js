const express = require('express')
const Post = require('../models/Posts')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)

    } catch (e) {
        res.json({
            Error: e,
            result: 'Fail'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const post = new Post(req.body)
        const data = await post.save();
        res.json(data)
    } catch (e) {
        res.json({
            Error: e,
            result: 'Fail'
        })
    }
})

// uniq post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post);
    } catch (e) {
        req.json({
            error: e,
            result: 'Fail'
        })
    }
})


// update post
router.patch('/:id', async (req, res) => {
    try {
        const postUpdate = await Post.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        })
        res.json(postUpdate);
    } catch (e) {
        req.json({
            error: e,
            result: 'Fail'
        })
    }
})

// delete post
router.delete('/:id', async (req, res) => {
    try {
        const postDelete = await Post.findOneAndDelete({
            _id: req.params.id
        })
        res.json(postDelete);
    } catch (e) {
        req.json({
            error: e,
            result: 'Fail'
        })
    }
})


module.exports = router;
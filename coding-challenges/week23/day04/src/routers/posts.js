const fs = require('fs')
const path = require('path')
const express = require('express')
const router = new express.Router()
const posts = require('../db/posts')

const pathJSON = path.join(__dirname, '../db/posts.json')

router.post('/posts', (req, res) => {
    posts.push(req.body)
    fs.writeFileSync(pathJSON, JSON.stringify(posts, null, 4))
    res.status(201).json({ message: 'post added' })
})

router.get('/posts', (req, res) => {
    res.json(posts)
})

router.get('/posts/:id', (req, res) => {
    try {
        posts.forEach(post => {
            if(post.id === parseInt(req.params.id)) {
                return res.json(post)
            }
        });
        return res.status(404).json({ error: 'id not found'})
    } catch (error) {
        return res.status(400).json({ error: 'something went wrong' })
    }
})

router.patch('/posts/:id', (req, res) => {
    const updates = Object.keys(req.body)
    try {
        posts.forEach(post => {
            if(post.id === parseInt(req.params.id)) {
                updates.forEach((update) => post[update] = req.body[update])
                fs.writeFileSync(pathJSON, JSON.stringify(posts, null, 4))
                return res.json(post)
            }
        });
        return res.status(404).json({ error: 'id not found'})
    } catch (error) {
        return res.status(400).json({ error: 'something went wrong' })
    }
})

router.delete('/posts/:id', (req, res) => {
    const newPosts = posts.filter(post => post.id !== parseInt(req.params.id))
    fs.writeFileSync(pathJSON, JSON.stringify(newPosts, null, 4))
    return res.json({ message: 'post deleted' })
})

module.exports = router
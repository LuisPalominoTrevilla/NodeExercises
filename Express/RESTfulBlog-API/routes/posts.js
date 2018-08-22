let store = require('../store')

module.exports = {
    getPosts(req, res) {
        res.status(200).json(store.posts)
    },
    addPost(req, res) {
        store.posts.push(req.body)
        res.status(201).send("created")
    },
    updatePost(req, res) {
        let post = req.params.postId
        store.posts[post] = req.body
        res.status(200).send("Post updated")
    },
    removePost(req, res) {
        // Post to remove
        let post = req.params.postId
        store.posts.splice(post, 1)
        res.status(204).send()
    }
}
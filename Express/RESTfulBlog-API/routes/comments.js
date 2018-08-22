let store = require('../store')

module.exports = {
    getComments(req, res) {
        post = req.params.postId
        res.status(200).send(store.posts[post].comments)
    },
    addComment(req, res) {
        post = req.params.postId
        store.posts[post].comments.push(req.body)
        res.status(201).send("Created comment")
    },
    updateComment(req, res) {
        post = req.params.postId
        comment = req.params.commentId
        store.posts[post].comments[comment] = req.body
        res.status(201).send("Comment updated")
    },
    removeComment(req, res) {
        post = req.params.postId
        comment = req.params.commentId
        store.posts[post].comments.splice(comment, 1)
        res.status(204).send()
    }
}
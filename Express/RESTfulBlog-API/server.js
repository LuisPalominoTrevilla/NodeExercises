const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
// Import both posts and comments routes
const {postsRoutes, commentsRoutes} = require('./routes/index')

let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

// Routes for posts
app.get('/posts', postsRoutes.getPosts)
app.post('/posts', postsRoutes.addPost)
app.put('/posts/:postId', postsRoutes.updatePost)
app.delete('/posts/:postId', postsRoutes.removePost)

//Routes for comments
app.get('/posts/:postId/comments', commentsRoutes.getComments)
app.post('/posts/:postId/comments', commentsRoutes.addComment)
app.put('/posts/:postId/comments/:commentId', commentsRoutes.updateComment)
app.delete('/posts/:postId/comments/:commentId', commentsRoutes.removeComment)

app.listen(3000)
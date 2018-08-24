/**
 * Mongoose provides a feature called population
 * It fills certain parts of the document from a different collection
 */

const mongoose = require('mongoose'),
  Schema = mongoose.Schema
  
const userSchema = Schema({
  _id     : Number,
  name: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
})

const postSchema = Schema({
  _creator: { type: Number, ref: 'User' },
  title: String,
  text: String
})

let Post  = mongoose.model('Post', postSchema)
let User = mongoose.model('User', userSchema)

User.findOne({ name: /azat/i })
  .populate('posts')
  .exec(function (err, user) {
    if (err) return handleError(err)
    console.log('The user has % post(s)', user.posts.length)
})

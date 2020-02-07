const mongoose = require('mongoose')
const { Schema } = mongoose

const IdeaSchema = new Schema({
  idea: { type: String, required: true },
  descrption: { type: String },
  upVotes: [{ type: Boolean }],
  downVotes: [{ type: Boolean }],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    autopopulate: true
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment', autopopulate: true }]
})

IdeaSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('ida', IdeaSchema)

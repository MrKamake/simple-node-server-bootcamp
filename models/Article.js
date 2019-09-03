const mongoose = require('mongoose');

/*

  MongoDB schema definition using mongoose
  https://mongoosejs.com/docs/guide.html

 */
const articleSchema = new mongoose.Schema({
  // TODO: Fill in article schema
  source: {
    id: String,
    name: String
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
  content: String
});

module.exports = mongoose.model('Article', articleSchema);

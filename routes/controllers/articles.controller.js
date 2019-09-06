const Article = require('../../models/Article');

/*

  TODO: GET /articles

*/
exports.getAll = async function(req, res, next) {
  // Your code here..
  try {
    const articles = await Article.find();

    res.json({ articles });
  } catch (err) {
    next();
    res.status(500).json({ errMessage: 'Error' });
  }
};

/*

  TODO: POST /articles/new

*/
exports.create = async function(req, res, next) {
  // Your code here..
  const newArticle = new Article(req.body);
  await newArticle.save();

  res.status(201).json({ result: 'ok', article: newArticle });
};

/*

  TODO: PUT /articles/:article_id

*/
exports.update = async function(req, res, next) {
  // Your code here..
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.article_id,
      req.body
    );

    res.json({ result: 'ok', article: updatedArticle });
  } catch (err) {
    res.status(400).json({ error: 'invalid article id' });
  }
};

/*

  TODO: DELETE /articles/:article_id

*/
exports.delete = async function(req, res, next) {
  // Your code here..
  try {
    await Article.findByIdAndDelete(req.params.article_id);

    res.json({ result: 'ok' });
  } catch (err) {
    res.status(400).json({ error: 'invalid article id' });
  }
};

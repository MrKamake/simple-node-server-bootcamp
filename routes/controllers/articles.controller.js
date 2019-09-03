const Article = require('../../models/Article');

/*

  TODO: GET /articles

*/
exports.getAll = async function (req, res, next) {
  // Your code here..
  try {
    const userFromDb = await Article.find();

    res.send({ articles: userFromDb });
  } catch (err) {
    next();
  }
};

/*

  TODO: POST /articles/new

*/
exports.create = async function (req, res, next) {
  // Your code here..
  const newArticle = new Article(req.body);
  console.log(newArticle);
  newArticle.save();

  res.status(201).send({ result: 'ok', article: newArticle });
};

/*

  TODO: PUT /articles/:article_id

*/
exports.update = async function (req, res, next) {
  // Your code here..
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.article_id,
      req.body
    );
    res.send({ result: 'ok', article: updatedArticle });
  } catch (err) {
    res.status(400).send({ error: 'invalid article id' });
  }
};

/*

  TODO: DELETE /articles/:article_id

*/
exports.delete = async function (req, res, next) {
  // Your code here..
  try {
    await Article.findByIdAndDelete(req.params.article_id);
    res.send({ result: 'ok' });
  } catch (err) {
    res.status(400).send({ error: 'invalid article id' });
  }
};

import express from 'express';
import articles from '../data/articles.js';

const router = express.Router();

router.get('/', (req, res) => {
  // res.render('index', {title: 'Product Listing', articles: articles});
  res.render('index', {title: 'Product Listing', articles});
});

router.get('/articles/:id', (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));

  // res.render('article', {title:article.name, article: article})
  res.render('article', {title:article.name, article});
});

router.post('/articles', (req, res) => {
  // const name = req.body.name;
  // const body = req.body.body;
  const { name, body } = req.body;

  const article = {
    // generate a random id that is multiplied by a massive nr just to get natural id nr. USE A METHOD THAT GENERATES UNIQUE ID NRs FOR PRODUCTION
    id: Math.floor(Math.random() * 100000000),
    name,
    body
  }
  articles.push(article);

  setTimeout(() => {
   res.render('partials/list', {articles});
  }, 3000)
});

export default router;


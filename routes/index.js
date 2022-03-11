var express = require('express');
let router = express.Router();
var moment = require('moment');

const messages = [
  {
    text: "Hi there!",
    user: "xGNSx24",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Criss4ngel",
    added: new Date()
  }
];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages: messages, moment: moment });
});


router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res, next) => {
  messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
  res.redirect('/');
});


module.exports = router;

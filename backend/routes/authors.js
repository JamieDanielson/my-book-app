const router = require('express').Router();
let Author = require('../models/author.model');

router.route('/').get((req, res) => {
  Author.find()
    .then((authors) => res.json(authors))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/new').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const newAuthor = new Author({
    firstName,
    lastName,
  });

  newAuthor
    .save()
    .then(() => res.json('Author added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

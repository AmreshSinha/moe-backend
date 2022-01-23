const path = require('path');
const Post = require('../models/post');

exports.index = function (req, res) {
    res.redirect('/');
};

exports.paste = function (req, res) {
    const name = req.body.name;
    const body = req.body.body;

    const Paste = new Post({ name, body });

    Paste.save()
      .then((result) => {
            res.send(result);
      })
      .catch((err) => {
            res.send("Error!");
            console.log(err);
        });
};

exports.list = function (id, res) {
    Post.findOne({ "_id": id })
      .then((result) => {
          res.send(result);
      })
      .catch((err) => {
          res.status(404).send("Error!");
            console.log(err);
      })
};
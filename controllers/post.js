const path = require('path');
const Post = require('../models/post');

exports.index = function (req, res) {
    res.redirect('/');
};

exports.paste = function (req, res) {
    const name = req.query.name;
    const body = req.query.body;

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

exports.list = function (req, res) {
    const id = req.params;
    
    Post.findOne({ id })
      .then((result) => {
          res.send(result);
      })
      .catch((err) => {
          res.send("Error!");
            console.log(err);
      })
};
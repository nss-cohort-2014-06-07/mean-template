'use strict';

var Category = require('../models/category');

exports.create = function(req, res){
  Category.create(req.body, req.user, function(err, category){
    res.send({category:category});
  });
};

exports.index = function(req, res){
  Category.all(req.user, function(err, categories){
    res.send({categories:categories});
  });
};


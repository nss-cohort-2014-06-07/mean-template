'use strict';

var User = require('../models/user');

exports.register = function(req, res){
  User.register(req.body, function(err, user){
    if(user){
      res.send(200);
    }else{
      res.send(400);
    }
  });
};

exports.login = function(req, res){
  User.login(req.body, function(err, user){
    if(user){
      res.send(200);
    }else{
      res.send(401);
    }
  });
};


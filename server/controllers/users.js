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


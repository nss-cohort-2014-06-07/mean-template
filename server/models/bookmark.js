'use strict';

var Mongo = require('mongodb');

function Bookmark(o, user){
  this.title      = o.title;
  this.url        = o.url;
  this.date       = new Date(o.date);
  this.categoryId = Mongo.ObjectID(o.categoryId);
  this.userId     = user._id;
}

Object.defineProperty(Bookmark, 'collection', {
  get: function(){return global.mongodb.collection('bookmarks');}
});

Bookmark.create = function(o, user, cb){
  var b = new Bookmark(o, user);
  Bookmark.collection.save(b, cb);
};

Bookmark.all = function(user, cb){
  Bookmark.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Bookmark;


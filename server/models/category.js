'use strict';

function Category(){
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.create = function(o, user, cb){
  o.userId = user._id;
  Category.collection.save(o, cb);
};

Category.all = function(user, cb){
  Category.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Category;


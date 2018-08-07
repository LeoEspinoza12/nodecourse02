// this our model for our dish object


// first we need to require the mongoose that we have downloaded
const mongoose = require('mongoose');

// then we can instantiate a schema and use it to 
// make a new schema of an object
const Schema = mongoose.Schema;


const commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }, 
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})



// then we make a we object using the schema
const dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [commentSchema]
}, {
  timestamps: true
});

// then create a new variable that we can 
// pass a mongoose. this will tell mongoose that the 
// dishschema will use a collection name Dish in 
// plural dishes and store it to the dishes variable 
// so that it can be exported
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;

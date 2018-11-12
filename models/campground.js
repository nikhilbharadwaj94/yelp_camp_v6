var mongoose = require("mongoose");
 
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         //ref here should contain the name of the model which we are refering
         ref: "Comment"
      }
   ]
});
 
//Below we are creating the collections name called "Campground" which we will be using to store and access records 
//Imagine module.exports as a return statement which will return the collection Campgrounds when we will require("campgrounds.js")
//in the app.js file
module.exports = mongoose.model("Campground", campgroundSchema);



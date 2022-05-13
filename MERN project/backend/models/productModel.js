const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
     name: {
          type: String,
          required: [true, "Please enter your name"]
     },
     description: {
          type: String,
          required: [true, "Please enter description"]
     },
     price:{
          type: Number,
          required: [true, "Please enter your Product Price"],
          maxlength : [8, "Price cannot exceed 8 charachter"]
     },
     rating: {
          type: Number,
          default: 0
     },
     images: [
          {
               public_id: {
                    type: String,
                    required: true
               },
               url: {
                    type: String,
                    required: true
               }
          }
     ],
     category: {
          type: String,
          required: [true, "Please enter Product Category"]
     },
     Stock: {
          type: String,
          required: [true, "Please Enter Product Stock"],
          maxlength: [4, "Stock cannot exceed 4 Charachter"],
          default: 1
     },
     numOfReviews: {
          type: String,
          default: 1
     },
     reviews: [
          {
               name: {
                    type: String,
                    required: true,
               },
               rating: {
                    type: Number,
                    required: true
               },
               comment: {
                    type: String,
                    required: true
               }
          }
     ],
     createdAt: {
          type: Date,
          default: Date.now
     }
});

module.exports = mongoose.model("Product", productSchema);
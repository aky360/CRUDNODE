const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");


exports.createProduct = catchAsyncError(async (req, res, next) => {
     const product = await Product.create(req.body);

     res.status(200).json({
          success: true,
          product
     });
});

// exports.getAllProducts = catchAsyncError(async (req, res, next) => {

//      const apiFeature = new ApiFeatures(Product.find({}), req.query).search();
//      const products = await apiFeature.query;
//      console.log(products);
//      res.status(200).json({
//           success: true,
//           products
//      });
// });



exports.getAllProducts = catchAsyncError(async(req, res, next) => {
     const resultPerPage = 8;
     const productsCount = await Product.countDocuments();
   
     const apiFeature = new ApiFeatures(Product.find(), req.query)
       .search()
       .filter();
   
     let products = await apiFeature.query;
   
     let filteredProductsCount = products.length;
   
     apiFeature.pagination(resultPerPage);
   
     products = await apiFeature.query;
   
     res.status(200).json({
       success: true,
       products,
       productsCount,
       resultPerPage,
       filteredProductsCount,
     });
   });


exports.updateProduct = catchAsyncError(async(req, res, next)=>{
     let product = Product.findById(req.params.id);

     console.log(product);

     if(!product){
          return res.status(200).json({
               success: true,
               message: "Product not found"
          });
     }
     product = await Product.findByIdAndUpdate(req.params.id, req.body,{
          new:true,
          runValidators :true,
          useFindAndModify:false
     });

     res.status(200).json({
          success: true,
          product
     });
});



exports.deletaProduct = catchAsyncError(async (req, res, next) => {
     const product = await Product.findById(req.params.id);
     console.log("this product to be deleted", product);
     if (!product) {
          return res.status(200).json({
               success: true,
               message: "Product not found"
          });
     }

     await product.remove();
     res.status(200).json({
          success: true,
          message: "product deleted successfully"
     });

});


exports.getProductDetails = catchAsyncError(async (req, res, next) => {
     const product = await Product.findById(req.params.id);

     if (!product) {
          return next(new ErrorHandler("Product not found", 404));
     }
     res.status(200).json({
          success: true,
          product
     });
});


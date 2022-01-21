const Product = require("../models/productModel");


exports.createProduct = async(req,res,next)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json({
            status:'success',
            message:{
                product
            }
        });
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:{
                err
            }
        });
    }
}



exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      status: "success",
      message: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: {
        err,
      },
    });
  }
};

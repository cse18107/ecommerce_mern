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

exports.updateProduct=async(req,res,next)=>{
  try{
    const product = await Product.findById(req.id);
    if(!product){
      return res.status(500).json({
        status:"failed",
        message:"product is not exist"
      })
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
    }); 
    res.status(200).json({
      status:"success",
      message:updatedProduct
    })
    
  }catch(err){
    res.status(500).json({
      status:"fail",
      message:{
        err
      }
    });
  }
}

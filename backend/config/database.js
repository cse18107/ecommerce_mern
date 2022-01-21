const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect(process.env.DB)
    .then(()=>{
        console.log('server is connected successfully');
    }).catch((err)=>{
        console.log(err);
    });
};

module.exports= connectDatabase;


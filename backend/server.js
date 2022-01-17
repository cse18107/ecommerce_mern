const app = require('./app');

app.listen(process.env.POST,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})
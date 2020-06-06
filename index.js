const express = require("express");

 const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    console.log("Connection successfull")
})
console.log("this is my page");
app.listen(port,()=> console.log(`The running port is ${port}`) )

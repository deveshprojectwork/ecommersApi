const express = require("express");

 const app = express();
const port = 3003;

app.get("/",(req,res)=>{
    res.send("Hello world")
    console.log("Connection successfull")
})
console.log("this is my page");
app.listen(port,()=> console.log(`The running port is ${port}`) )



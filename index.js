const express = require("express");
const app = express();

const port = 3003;

app.get("/", (req,res)=>{
    res.send("hello world, this is live");
})

app.listen(port,()=> console.log(`This post is my : ${port}`));
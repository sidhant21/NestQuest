const express = require("express");
const app = express();
const users = require("./routes/users.js");

app.get("/",(req,res)=>{
    res.send("Hi I am root!");
})
//User
app.use("/",users);


app.get("/users",(req,res)=>{
    res.send("GET For Users");
})
app.get("/users/:id",(req,res)=>{
    res.send("GET For User ID");
})
app.post("/users",(req,res)=>{
    res.send("POST For Users");
})
app.delete("/users/:id",(req,res)=>{
    res.send("DELETE For User ID");
})
app.listen(3000,()=>{
    console.log("server is listening to 3000");
})
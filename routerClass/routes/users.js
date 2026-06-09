const express = require("express");
const router = express.Router();
//User
router.get("/users",(req,res)=>{
    res.send("GET For Users");
})
router.get("/users/:id",(req,res)=>{
    res.send("GET For User ID");
})
router.post("/users",(req,res)=>{
    res.send("POST For Users");
})
router.delete("/users/:id",(req,res)=>{
    res.send("DELETE For User ID");
})
module.exports = router;
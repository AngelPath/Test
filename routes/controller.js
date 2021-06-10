const express = require('express');
const fs = require('fs');
let router = express.Router();


router.get("/home",(req,res)=>{
    res.render('home');
    
});
// router.get("/contact",(req,res)=>{
//     res.render('contact');
// });
router.post("/submit",(req,res)=>{
    const id =Math.floor((Math.random()*10000000)+1);
    console.log(req.body);
    console.log('User ID: '+id);
    var info = {fname: req.body.fname, lname: req.body.lname, email: req.body.email, Id: id};
    res.render('submit', {info: info});
    
});

module.exports = router;
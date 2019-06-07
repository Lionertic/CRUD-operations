const express = require('express');
const path = require('path');
const User = require('../models/Users');

const route = express.Router()

route.get('/users',(req,res,next)=>{
    User.find((err,users)=>{
        res.json(users);
    })
});

route.post('/user',(req,res,next)=>{
    console.log(req.body);
    
    let newUser=new User({
        Name:req.body.name,
        Balance:req.body.balance,
        Phone:req.body.phone
    });
    newUser.save((err)=>{
        if(err)
            console.log("Error saving");
        else
            console.log("Successfully saved");

            res.redirect('/home');
    });
});

route.put('/user/:id',(req,res,next)=>{
    User.updateOne({_id:req.params.id},{Name:req.body.Name,Phone:req.body.Phone,Balance:req.body.Balance},(err,result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
});

route.delete('/user/:id',(req,res,next)=>{
    User.deleteOne({_id:req.params.id},(err,result)=>{
        console.log(result);
        
        if(err)
            res.json(err);
        else
            res.json(result);  
    });
});

module.exports=route;
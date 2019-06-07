const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./server/routes/route');
const path = require('path');

const db = 'mongodb://localhost:27017/users';

const app = express();
const port = process.env.PORT || 5000

mongoose.connect(db,{useNewUrlParser:true});

mongoose.connection.on('connected',()=>{
    console.log("Success DB");
});

mongoose.connection.on('error',(err)=>{
    if(err)
        console.log("Error DB");
});

app.use(bodyParser.json());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'dist/Crud')));

app.use('/api',route);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/CRUD/index.html'));
})
// app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log("Listening to port "+port);
})
const express = require('express');
let ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const submit = require("./routes/controller");


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/public')));//a folder to contain all inform. makes it publically available across app
app.set('view engine','ejs');//ejs 


app.use('/', submit);

app.use((req, res,next)=>{
    res.status(404).send('<h1> Page not found </h1>');
 });

app.listen("3000");
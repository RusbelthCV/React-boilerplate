const express = require('express');
const app = express();

const port = 4000;

app.set('port', process.env.PORT || 4000)


app.get('/api',(req,res) => {
    console.log('hola');
});

app.use((req,res) =>{
    res.redirect('/api');
});

app.listen(port,(req,res) =>{
    console.log('server on 4000');
});
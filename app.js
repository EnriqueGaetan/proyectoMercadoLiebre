const express = require('express');
const path = require ('path');
const app = express();
const dotenv = require('dotenv').config();

app.use (express.static('public'));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'));
})
app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
})
app.get('/loguin.html', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/loguin.html'));
})

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT +'http://localhost:3000');
});
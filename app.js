const express = require('express');
const app = express();
app.use(express.static('public'));

// Para acceder a todas las variables de entorno ya creadas
// process.env

// process.env.PORT

app.listen(process.env.PORT, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


const express = require ("express");
//El objetivo de path es unificar las rutas dentro de los distintos sistemas operativos, para que le sea mas
// sencillo a express en que lugar nos encontramos y a que lugar queremos llegar
const path = require("path");

const app = express();

//Hay que crear una variable constante publicPath, que da referencia a la carpeta de archivos públicos
const publicPath = path.resolve(__dirname, "./public");

//Para hacer uso sde archivos estáticos
//static recibe como parámetro publicPath
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000");
});
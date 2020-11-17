const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')


const items = require('./routes/api/items');


const app = express();

//Middleware de bodyparser
app.use(bodyParser.json());

//Configuracion de la base de datos
const db = require('./config/keys').mongoURI;

//Conexion a Mongo
mongoose
    .connect(db)
    .then(()=> console.log('Conectado a base de datos...'))
    .catch(err => console.log(err));


//Routes
app.use('/api/items', items)


//Static assets para produccion
if(process.env.NODE_ENV === 'production'){
    //Agregar carpeta static
    app.use(express.static('client/buid'));

    app.use('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

    const port = process.env.PORT || 5000;

    app.listen(port, ()=> console.log(`Servidor iniciado en ${port}`))
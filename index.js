const colors = require('colors')
const express = require('express');
const dotenv = require('dotenv');
const server = express();
dotenv.config();

const port=process.env.port;
const NOMBRE=process.env.NOMBRE;
const TIPO=process.env.TIPO;
const PROP=process.env.PROP;
const PES=process.env.PES;

server.get('/',(req,res)=>{
    res.send(`
    <table border="3px">
    <tr>
    <td>${NOMBRE}</td>
    <td>${TIPO}</td>
    </tr>
    <tr>
    <td>${PROP}</td>
    <td>${PES}</td>
    </tr>
    `);
})

server.listen(port,()=>{
    console.log(`Estoy en el puerto${port}`.random);
} )
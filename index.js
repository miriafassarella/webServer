const express = require('express'); // it is the same as ( const http = require('http') )
const consign = require('consign');
const bodyParcer = require('body-parser'); //we use to interpret postman damage


let app = express(); //invoking the spress


app.use(bodyParcer.urlencoded({ extended: false})); 
app.use(bodyParcer.json()); //will take the postman data and turn it into json


//refers to folder name routes
consign().include('routes').include('utils').into(app); //include where? into(app).

app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');

});
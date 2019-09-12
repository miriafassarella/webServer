const express = require('express'); // it is the same as ( const http = require('http') )
let routesIndex = require('./routes/index');//requesting the route from an external file
let routesUsers = require('./routes/users');
// (./) means don't look inside the node_modules
let app = express(); //invoking the spress

//telling the main file I'm using
app.use(routesIndex);
app.use('/users',routesUsers);




   
app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');

});
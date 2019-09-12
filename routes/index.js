let express = require('express');
let routes = express.Router(); //using the method Router to export the document

routes.get('/',(req, res)=>{//creating a route - the first parameter is the route

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); //specifying that this is a html
    res.end('<h1>Olá</h1>');

});

module.exports = routes; //stating that you are exporting this document
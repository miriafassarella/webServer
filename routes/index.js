
module.exports = app=>{

    app.get('/',(req, res)=>{//creating a route - the first parameter is the route

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html'); //specifying that this is a html
        res.end('<h1>Olá</h1>');
    
    });

}; //stating that you are exporting this document
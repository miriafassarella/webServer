const http = require('http');

let server = http.createServer((req, res)=>{

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    switch(res.url){

        case "/":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Olá</h1>');
            break;
    }

});

server.listen(9000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');

});
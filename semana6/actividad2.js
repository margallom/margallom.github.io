import http from 'http';

const servidor = http.createServer((req, res) => {
    console.log("Alguien me mando una solicitud");
    //console.log(req);
    const urlProcesada = url.parse(req.url, true);
    //console.log(urlProcesada);
    const queryParams = urlProcesada.query;
    const x = queryParams.x;
    const datos = require('./miarchivo.json');
    console.log(datos);
    if(x === '2026'){
        res.writeHead(200,{'content-type': 'text/plain'});
        res.end('Quiero la libertad de esculpir y cincelar mi propio rostro, de detener la hemorragia con cenizas, de crear mis propios dioses a partir de mis entrañas...\n'+x);
    }else if(x === '2025'){
        res.writeHead(200,{'content-type': 'text/plain'});
        res.end('Esto fue el año pasado\n'+x);
    }
});

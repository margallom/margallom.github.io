import http from 'http';
const servidor = http.createServer(async (req, res) => {
    if (req.url === '/') {
        const respuesta = await fetch('https://www.theaudiodb.com/api/v1/json/123/search.php?s=Harry+Styles');  
        const datos = await respuesta.json();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(datos));
        console.log(datos)
    }
});

const puerto = 3000;
servidor.listen(puerto, () => {
    console.log("pon el link de tu artista favorito");
});

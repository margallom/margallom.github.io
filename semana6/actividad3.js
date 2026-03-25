import http from 'http';
const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const respuesta = {
        mensaje: "Buenas tardes!",
        status: "ok",
        data: {
            nombre: "Mar",
            edad: 19
        }
    };

    res.end(JSON.stringify(respuesta));
});

const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});

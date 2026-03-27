import http from 'http';

const servidor = http.createServer(async (req, res) => {
    if (req.url === '/usuarios') {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            const datos = await respuesta.json();

            const resultado = datos.map(usuario => ({
                nombre: usuario.name,
                correo: usuario.email
            }));
      
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(resultado));
    } else {
        res.writeHead(404);
        res.end('Ruta no encontrada');
    }
});

const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});

//Importa el modulo http que permite crear servidores
import http from 'http';
//Importa el modulo fs que permite interactuar con los archivos del sistema
import fs from 'fs';
    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //El 500 signifca que hay un error  
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //El 200 es que se reliazo correctamente 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }
    //Esta función deberá enviar un json con los datos de las mascotas
    function getMascotas(req, res) {
        //Esto representa un objeto JSON de una mascota
        //Agrega otra mascota
        const mascotas = [{
            "nombre": "Pikachu",
            "color": "Amarillo",
          },
        {
            "nombre": "Kenzo",
            "color": "Negro",
        }];  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //Convierte un objeto json a una cadena de texto y se usa para enviar datos a un servidor 
      res.end(JSON.stringify(mascotas));
    }

    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      function mostrarAdoptantes(req, res) {
        //Construye una página básica adpotantes.html
        fs.readFile('adoptantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las adoptantes
    function getAdoptantes(req, res) {
    //Tienes que corregir varias cosas en esta sección
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Aquí van los datos de los adoptantes');
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Página no encontrada.');
    }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/mascotas') {
        getMascotas(req, res);
      } else if (url === '/api/adoptantes') {
        getAdoptantes(req, res);
      } 
      else if (url === '/mascotas') {
        mostrarMascotas(req, res);
      } 
      else if (url === '/adoptantes') {
        mostrarAdoptantes(req, res);
      } 
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html

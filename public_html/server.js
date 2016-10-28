/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Server.js

// Definimos la variable http importando el modulo 'HTTP'.
var http = require("http");

/*
 *
 Ejecutamos la funcion createServer(), que es la que crea  nuestro servidor web y le pasamos como parametro nuestro  CallBack, que es la  funcion que se ejecuta cada  vez que  se lance el evento create, osea cada vez que  apuntemos a  nuestra pagina web que estara en, http://localhost:9999/
 *
 */
http.createServer(function (request, response) {

 /* con la variable response, que es la que nos da 
  *  la     oportunidad de responder a la peticion de           nuestro request que en este caso seria                     http://localhost:9999, 

    la funcion writeHead iene dos parametros, el primero       indica el codigo
    de la respuesta, y el segungo el tipo de documento
    el codigo 200 en http significa -> OK
    el tipo de documento es texto plano en formato html
 *
 */

    response.writeHead(200, {"Content-Type": "text/html"});

//  Con write escribimos directamente en el body de la 
//  pagina web

    response.write("Hola Mundo...");

    console.log("Escribiendo en la consola de Node...");


    // terminamos la respuesta al explorador

    response.end();

}).listen(9999);


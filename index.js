/*var express = require("express"),
	app = express(),
	server = require("http").createServer(app),
	io = require("socket.io").listen(server);
server.listen(3000);
app.get("/", function(req, res) { 
	res.sendFile(__dirname + "/public/cliente.html");
});
io.sockets.on("connection", function(socket) { 
	console.log("Se haconectado un nuevo cliente al puerto 3000");
});*/

/**************/
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, { log: false });
server.listen(3000);
console.log("Servidor activo escuchando peticiones por el puerto: 3000");
app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/cliente.html');
});
io.sockets.on('connection', function(socket){
    socket.on('actualizarEstrellas', function(datos){
        io.emit('actualizarEstrellas',datos);
    });
    socket.on('marcar', function(datos){
        io.emit('marcar',datos);
    });
    socket.on('iniciarPartida', function(datos){
        io.emit('iniciarPartida',datos);
    });
    socket.on('listaTurnos', function(datos){
        io.emit('listaTurnos',datos);
    });
    socket.on("enviaReto",function(datos){
        io.emit("enviaReto",datos);
    });
    socket.on("aceptaReto",function(datos){
        io.emit("aceptaReto",datos);
    });
    socket.on("terminaJuego",function(datos){
        io.emit("terminaJuego",datos);
    });
    socket.on("categoriaItems",function(datos){
        io.emit("categoriaItems",datos);
    });
    socket.on("abandonarPartida",function(datos){
        io.emit("abandonarPartida",datos);
    });
    socket.on("actualizaEstadisticas",function(datos){
        io.emit("actualizaEstadisticas",datos);
    });
    socket.on("turnoPorFinDeTiempo",function(datos){
        io.emit("turnoPorFinDeTiempo",datos);
    });
});

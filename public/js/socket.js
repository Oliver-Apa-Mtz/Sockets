var socket = io();
//escuchar
socket.on('connect', function () {
    console.log('conectado al servidor')
});

socket.on('disconnect', function () {
    console.log('usuario desconectado');
});
//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Oliver',
    mensaje: 'Hola'
}, function (resp) {
    console.log(resp);
});
//recibir información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor', mensaje);
})
const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido administrador'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /*if (mensaje.usuario) {
            callback('Todo salio bien');
        } else {
            callback('Todo salio mal');
        }*/
    })
});
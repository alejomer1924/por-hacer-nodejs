const descripcion = {
    demand: true,
    alias: 'd'
}; 

const compleado = {
    alias: 'c',
    default: true
}

const argv = require('yargs').command('crear', 'Crear un elemento por hacer', {
    descripcion
       
}).command('actualizar', 'Actualiza el estado compleado de una tarea', {
    descripcion,
    compleado
}).command('borrar', 'Borrar una tarea por hacer', {
    descripcion
})
.help().argv;


module.exports = {
    argv
}
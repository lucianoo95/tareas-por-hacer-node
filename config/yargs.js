const description = {
  demand: true,
  alias: 'd'
};

const completado = {
  default: true,
  alias: 'c'
}

const list = {
  demand: false,
  alias: 'l'
}

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', { description })
  .command('actualizar', 'Actualiza un elemento', { description, completado })
  .command('listar', 'Listar las tareas por hacer', { list })
  .command('eliminar', 'Eliminar una tarea', { description })
  .help()
  .argv;

module.exports = { argv }
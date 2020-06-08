const { argv } = require('./config/yargs');
const porHacer = require('./src/index');
const colors = require('colors');

const command = argv._[0];

switch (command) {
  case 'crear':
    console.log('Crear tareas');
    let tarea = porHacer.crear(argv.description);
    console.log(tarea)
    break;

  case 'listar':
    console.log('Listar tareas');
    let listado = porHacer.cargarDB();
    let tareas = '';
    for (const tarea of listado) {
      tareas += `${tarea.descripcion.blue} . Estado: ${tarea.completado} . \n`;
    }

    console.log('====Por hacer===='.green);
    console.log(tareas);
    console.log('================='.green);

    break;

  case 'actualizar':
    console.log('Actualizar tareas');
    let resultado = porHacer.actualizar(argv.description, argv.completado);
    console.log(resultado)
    break;

  case 'eliminar': 
  console.log('Eliminar tarea');
  let resultado2 = porHacer.eliminar(argv.description);
  console.log(resultado2);
  break;

  default:
    console.log('Comando no es roconocido');
    break;
}
const fs = require('fs');

let listadoPorHacer;

const guardarDB = () => {

  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('./database/data.json', data, (error) => {
    if (error) {
      throw new Error('No se pudo grabar.', error);
    }
  });

}

const cargarDB = () => {
  try {
    return listadoPorHacer = require('../database/data.json');
  } catch {
    return listadoPorHacer = [];
  }
}

const crear = (descripcion) => {
  // Cargar el data.json
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push(porHacer);
  // Guardar en el data.json
  guardarDB();

  return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {

  cargarDB();

  const index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }

}

const eliminar = (descripcion) => {

  cargarDB();

  const index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
 
  if (index >= 0) {
    listadoPorHacer.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }

}

module.exports = { crear, cargarDB, actualizar, eliminar }
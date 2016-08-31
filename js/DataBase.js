/*****************************************************
Clase para la conexion a la base de datos

Nota.- La base de datos a utilizar es indexedDB (almacena
	la informacion en el navegador), en este caso chromium.
*****************************************************/

class DataBase
{
	/*** Propiedades ***/

	// Construcor de la clase
	// @param dbName Nombre que le asignamos a la base de datos
	constructor(dbName  = 'probabilidad')
	{
		// Abrimos una conexion a la base de datos
		this.connect(dbName);	
	}

	/*** Métodos ***/

	// Abrimos una conexion a la base de datos
	// @param dbName Nombre que le asignamos a la base de datos
	connect(dbName)
	{
		// Abrimos la conexion a la base de datos
		let req = window.indexedDB.open(dbName, 3);
		let db;

		// Verificamos si hubo un error al conectar
		req.onerror = event =>
		{
			console.log('Error al conectar con la base de datos');
		}

		// Verificamos si hubo exito al conectar
		req.onsuccess = event =>
		{
			console.log('Exito al conectar a la base de datos');
			db = req.result;

			// Creamos un manejador de errores generico
			db.onerror = event =>
			{
				console.log('DataBase Error: {$event.target.errorCode}');
			}
		}

		// Actualizacion de la version de la base de datos
		req.onupgradeneeded = event =>
		{
			let db = event.target.result;
			// let objectStore = db.createObjectStore('name', {keyPath: 'myKey'});

			console.log('upgrade actived');
		}
	}
	// Verificamos si hay soporte para indexedDB
	support()
	{
		// Comprobamos si esta soportado en el navegador
		if(window['indexedDB'] === undefined) console.log('No soportado!');
		else console.log('Soportado!');
	}
}
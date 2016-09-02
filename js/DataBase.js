/*****************************************************
Clase para la conexion a la base de datos

Nota.- La base de datos a utilizar es indexedDB (almacena
	la informacion en el navegador), en este caso chromium.
*****************************************************/

class DataBase
{
	// Construcor de la clase
	// @param dbName Nombre que le asignamos a la base de datos
	constructor(dbName  = 'probabilidad')
	{
		this.version = 3; // Versión de la base de datos
		// Abrimos una conexion a la base de datos
		this.db = this.connect(dbName);	
	}

	/*** Métodos ***/

	// Abrimos una conexion a la base de datos
	// @param dbName Nombre que le asignamos a la base de datos
	connect(dbName)
	{
		// Abrimos la conexion a la base de datos
		let req = window.indexedDB.open(dbName, this.version);
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

			// Retornamos el objeto de conexión de la base de datos
			return db;
		}

		// Actualizacion de la version de la base de datos
		req.onupgradeneeded = event =>
		{
			// info = https://rolandocaldas.com/html5/indexeddb-tu-base-de-datos-local-en-html5
			// En este punto vamos a crear las colecciones (tablas) para nuestra base de datos
			let db = event.target.result;
			/*
			// Recibe dos parametros, 1.- el nombre de la coleccion, 2.- objeto con las opciones
			// keyPath = llave unica o primary key, autoIncrement = booleano - indica si el
			// keyPath sera autoincrementable 

			let objectStore = db.createObjectStore('name', {
				keyPath: 'myKey',
				autoIncrement: true
			});

			// Tambien podemos crear llaves unicas para nuestras colecciones (el valor de un campo
			// es unico, no se puede repetir), estos son importantes, ya que cuando queremos realizar
			// una busqueda, esta se realiza en los indices creados.

			// Recibe 3 parametros, 1.- name = nombre del indice, 2.- field = el nombre de la propiedad
			// que se almacenara en el indice, 3.- options = objeto con las opciones del indice [unique =
			// booleano para indicar si el indice debe ser unico o no].
			// ejemplo.- objectStore.createIndex('by_name', 'name', { unique : false });
			
			objectStore.createIndex('name', 'field', options);
			*/

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
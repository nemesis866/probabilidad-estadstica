Documentación sobre la clase DataBase
=====================================

En este archivo encontrara la documentación necesaria para trabajar con la base de datos, el gestor de base de datos que uilizamos es IndexedDb, una base de datos integrada en la API de HTML 5.

# Como inicializar una conexión a la base de datos.

El constructor de la clase se encarga de establecer una conexión entre el programa y la base de datos, asi que, basta con crear una instancia de la clase, la cual recibe como parametro (opcional) el nombre de la base de datos.-

```js
// Nombre de la base de datos
const dbName = 'probabilidad';

// Creamos una instancia de la clase
let db = new DataBase(dbName);
```

Ahora ya tenemos establecida la conexión y podemos hacer uso de los métodos de la clase.

# Métodos disponibles en la base de datos.

A continuación encontrara una descripción rapida de los métodos de la clase.-

* insert() - Inserta información en la base de datos.
* searchAll() - Obtiene todos los registros una tabla (almacen).
* searchById() - Obtiene un solo registro mediante su llave primaria ID.
* searchByKey() - Obtiene todos los registros de una tabla (almacen) mediante un indice.
* support() - Nos indica si existe soporte para utilizar IndexedDB como base de datos en el programa.

# Detalles de los métodos disponibles

## insert(name, obj)

Nos permite insertar información en una tabla de nuestra base de datos, recibe dos parametros.-

* name [requerido] - Nombre de la tabla donde se guardara la información.
* obj [requerido] - Objeto con las propiedades (nombre de columna) y sus valores que se van a guardar.

Ejemplo.-

```js
// Creamos una instancia de la base de datos
let db = new DataBase('probabilidad');

// Creamos un objeto
let obj = {
	name: 'Paulo',
	email: 'source.compu@gmail.com',
	phone: 34567890
}

// Guardamos la información
db.insert('contactos', obj);
```

## searchAll(name, callback)

Nos permite recuperar todos los registros de una tabla (almacen), recibe dos parametros.-

* name [requerido] - Nombre de la tabla donde se obtendrá la información.
* callback [opcional] - Función a ejecutar cuando se termine de obtener los resultados.

Ejemplo.-

```js
// Creamos una instancia de la base de datos
let db = new Database('probabilidad');

// Creamos la función que usaremos como callback
let callback = function (data)
{
	let html = '';

	// Recorremos el objeto para obtener cada registro
	for(let key in data){
		html += '<p>Nombre: ${key.name}</p>' +
			'<p>Email: ${key.email}</p>' +
			'<p>Phone: ${key.phone}</p>';	
	}

	document.getElementById('info').innerHTML = html;
}

// Obtenemos los registros
db.searchAll('contactos', callback);
```

## searchById(name, id, callback)

Nos permite recuperar un solo registro de una tabla (almacen) mediante un identificador, recibe tres parametros.-

* name [requerido] - Nombre de la tabla donde se obtendrá la información.
* id [requerido] - Identificador a buscar en la tabla (tipo numerico).
* callback [opcional] - Función a ejecutar cuando se termine de obtener los resultados.

Ejemplo.-

```js
// Creamos una instancia de la base de datos
let db = new Database('probabilidad');

// Creamos la función que usaremos como callback
let callback = function (data)
{
	let html = '';

	html += '<p>Nombre: ${data.name}</p>' +
		'<p>Email: ${data.email}</p>' +
		'<p>Phone: ${data.phone}</p>';	

	document.getElementById('info').innerHTML = html;
}

// Obtenemos los registros
db.searchById('contactos', 3, callback);
```

## searchByKey(name, id, key, callback)

Nos permite recuperar los registros de una tabla (almacen) mediante un index (palabra a buscar), recibe cuatro parametros.-

* name [requerido] - Nombre de la tabla donde se obtendrá la información.
* id [requerido] - Identificador del nombre de la columna a buscar
* key [requerido] - Palabra a buscar.
* callback [opcional] - Función a ejecutar cuando se termine de obtener los resultados.

Ejemplo.-

```js
// Creamos una instancia de la base de datos
let db = new Database('probabilidad');

// Creamos la función que usaremos como callback
let callback = function (data)
{
	let html = '';

	for(let key in data){
		html += '<p>Nombre: ${key.name}</p>' +
			'<p>Email: ${key.email}</p>' +
			'<p>Phone: ${key.phone}</p>';
	}

	document.getElementById('info').innerHTML = html;
}

// Obtenemos los registros
db.searchByKey('contactos', 3, 'paulo', callback);
```

## support()

Nos retorna información sobre si el programa (chromium) da soporte al gestor de base de datos IndexedDB.

```js
// Creamos una instancia de la base de datos
let db = new Database('probabilidad');

// Obtenemos información
db.support();
```
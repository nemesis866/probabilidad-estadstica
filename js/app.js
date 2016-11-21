/*****************************************************
Archivo principal de la aplicación
*****************************************************/

const dbName = 'probabilidad'; // Nombre de la base de datos

// Instanciamos los objetos
let db = new DataBase(dbName); // Base de datos

// Detectar si estamos conectados a internet
let os = new OnlineStatus();

// Controlador principal de la aplicación
let mainController = new MainController();

// Trabajar con tablas
let table = new Table();
let datoNoAgrupado = new DatoNoAgrupado();
let datoAgrupado = new DatoAgrupado();

var sizes = function()
{
	var height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 50;

	document.getElementById('main-aside').style.height = height+'px';
	document.getElementById('main-aside').style.maxHeight = height+'px';

	document.getElementById('second').style.height = height+'px';
	document.getElementById('second').style.maxHeight = height+'px';
}

window.onresize = function ()
{
	sizes();
}
window.onload = function ()
{
	sizes();
}


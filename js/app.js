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
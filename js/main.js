/*****************************************************
Archivo principal de la aplicación
*****************************************************/

// Agregamos las dependencias
const {app, BrowserWindow} = require('electron');

// Mantener una referencia global del objeto window, si no lo hace, la ventana puede
// cerrarse automaticamente cuando el objecto garbage collected se utilice.
let win;

function createWindow ()
{
	// Creamos la ventana del navegador
	win = new BrowserWindow({
		height: 600, // Altura de la ventana
		icon: 'favicon.ico', // Icono de la aplicacion
		minHeight: 600, // Altura minima de la ventana
		minWidth: 800, // Ancho minimo de la ventana
		title: 'Probabilidad',
		width: 800 // Ancho de la ventana
	});

	// Barra de progreso
	//win.setProgressBar(0.5);

	// Cargamos el index.html de la aplicacion
	win.loadURL(`file://${__dirname}/../index.html`);

	// Abrimos las herramientas de produccion
	win.webContents.openDevTools();

	// Emitimos este evento cuando la ventana sea cerrada
	win.on('closed', () =>
	{
		// Eliminar la referencia al objeto ventana (inclusive si hay un array de ventanas)
		// cierra la aplicacion
		win = null;
	});
}

// Este método será llamado cuando Electron ha terminado
// la inicialización y este listo para crear las ventanas del navegador.
// Algunas API sólo se pueden utilizar después de producirse este evento.
app.on('ready', createWindow);

// Salimos cuando todas las ventanas fueron cerradas
app.on('window-all-closed', () =>
{
	// En MacOS es común que las aplicaciones y su barra de menú
	// se mantengan activas hasta que el usuario salga de forma explícita con Cmd + Q
	if(process.platform !== 'darwin'){
		app.quit();
	}
});

app.on('activate', () =>
{
	// En Mac OS es común para volver a crear una ventana en la aplicación cuando se hace clic en el icono de la base
	// y no hay otras ventanas abiertas.
	if(win === null){
		createWindow();
	}
});

// En este archivo puede incluir el resto del proceso principal específico de la aplicación
// También se puede poner en archivos separados y les incluye aquí.
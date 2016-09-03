/*****************************************************
Archivo principal de la aplicación
*****************************************************/

// Agregamos las dependencias
const {app, BrowserWindow, Menu} = require('electron');

// Plantilla para el menu
const template = [
{
	label: 'Archivo',
	submenu: [
		{
			label: 'Minimizar',
			role: 'minimize'
		},
		{
			type: 'separator'
		},
		{
			label: 'Salir',
			role: 'close'
		}
	]
},
{
	label: 'Editar', // Menu Editar
	submenu: [
		{
			label: 'Deshacer',
			role: 'undo' // Deshacer
		},
		{
			label: 'Rehacer',
			role: 'redo' // Rehacer
		},
		{
			type: 'separator' // Separador
		},
		{
			label: 'Copiar',
			role: 'copy' // Copiar
		},
		{
			label: 'Cortar',
			role: 'cut' // Cortar
		},
		{
			label: 'Pegar',
			role: 'paste' // Pegar
		},
		{
			type: 'separator' // Separador
		},
		{
			label: 'Seleccionar Todo',
			role: 'selectall' // Seleccionar todo
		},
	]
},{
	label: 'Ver',
	submenu: [
		{
			label: 'Reestablecer zoom',
			role: 'resetzoom'
		},
		{
			label: 'Aumentar zoom',
			role: 'zoomin'
		},
		{
			label: 'Disminuir zoom',
			role: 'zoomout'
		},
		{
			type: 'separator'
		},
		{
			label: 'Pantalla completa',
			role: 'togglefullscreen'
		}
	]
},{
	label: 'Ayuda',
	submenu: [
		{
			label: 'Más información',
			click()
			{
				let url = 'https://github.com/nemesis866/probabilidad-estadstica';
				require('electron').shell.openExternal(url);
			}
		},
		{
			label: 'Acerca de',
			click()
			{
				// Ejecutamos la ventana acerca de
				aboutWindow();
			}
		}
	]
}];

// Creamos el menu principal
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// Mantener una referencia global del objeto window, si no lo hace, la ventana puede
// cerrarse automaticamente cuando el objecto garbage collected se utilice.
let win, about;

function createWindow ()
{
	// Creamos la ventana del navegador
	win = new BrowserWindow({
		backgroundColor: '#eee', // Fondo para crear efecto visual de aplicación nativa
		height: 600, // Altura de la ventana
		icon: 'favicon.ico', // Icono de la aplicacion
		minHeight: 600, // Altura minima de la ventana
		minWidth: 800, // Ancho minimo de la ventana
		show: false, // Eliminamos el efecto de carga tipo web
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

	// Mostramos la ventana cuando este lista
	win.once('ready-to-show', () =>
	{
		// Mostramos la ventana
		win.show();
	});
}

function aboutWindow ()
{
	about = new BrowserWindow({
		backgroundColor: '#eee', // Fondo de ventana
		height: 350, // Alto de la ventana
		icon: 'favicon.ico', // Icono de la aplicacion
		parent: win, // Ventana padre
		minimizable: false, // Indicamos si la ventana es minimizable
		modal: true, // Tipo de vantana
		resizable: false, // Indicamos si la ventana puede modificar su tamaño
		show: false, // No mostrar
		width: 750 // Ancho de la ventana
	});

	about.loadURL(`file://${__dirname}/../template/about.html`);

	// Mostramos hasta que esten cargados todos los elementos
	about.once('ready-to-show', () =>
	{
		about.show();
	});

	about.setMenu(null);
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
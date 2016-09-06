/*****************************************************
Clase para la libreria charjs - graficos

Nota: puede encontrar toda la documentación necesaria
	desde el siguiente enlace.-

	http://www.chartjs.org/docs/
*****************************************************/

class ChartJs
{
	constructor()
	{
		// Colores para columnas
		this.colors = [
			'255, 99, 132', // Rojo
            '54, 162, 235', // Azul
            '255, 206, 86', // Amarillo
            '75, 192, 192', // Verde
            '153, 102, 255', // Purpura
            '255, 159, 64' // Naranja
		];

		// Configuración global de la fuente
		Chart.defaults.global.defaultFontSize = 12; // Tamaño de letra
		Chart.defaults.global.defaultFontColor = '#666'; // Color de la letra
		Chart.defaults.global.defaultFontFamily = "'Arial','helvetica'"; // Tipo de fuente
		Chart.defaults.global.defaultFontStyle = 'normal'; // Estilo de la fuente

		// Configuración de grafica basica
		Chart.defaults.global.responsive = true; // Responsive design

		// Configuración del titulo
		Chart.defaults.global.title.display = false; // Mostrar titulo
		Chart.defaults.global.title.fontFamily = "'arial','helvetica'"; // Tipo de letra
		Chart.defaults.global.title.fontSize = 14; // Tamaño del titulo
		Chart.defaults.global.title.fontColor = '#666'; // Color del titulo
		Chart.defaults.global.title.fontStyle = 'bold'; // Estilo para el titulo
		Chart.defaults.global.title.text = 'Grafica'; // Texto del titulo
		Chart.defaults.global.title.position = 'top'; // Posicion del titulo [top, bottom]
		Chart.defaults.global.title.padding = 10; // Margen para el titulo arriba y abajo

		// Configuración de la linea
		Chart.defaults.global.elements.line.tension = 0.1; // Tension de la curva
		Chart.defaults.global.elements.line.fill = false; // La grafica tiene color [true, false]
		Chart.defaults.global.elements.line.stepped = false; // Mostrar rectanglo en lugar de curva
		Chart.defaults.global.elements.line.backgroundColor = 'rgba(54, 162, 235, 0.7)'; // Color del relleno
		Chart.defaults.global.elements.line.borderWidth = 4; // Ancho para el borde
		Chart.defaults.global.elements.line.borderColor = 'rgba(54, 162, 235, 1)'; // Color para el borde

		// Configuracion del punto
		Chart.defaults.global.elements.point.radius = 5; // Tamaño del radio del punto
		Chart.defaults.global.elements.point.pointStyle = 'circle'; // Tipo de punto
		Chart.defaults.global.elements.point.backgroundColor = 'rgba(0,0,0,0.2)'; // Color de relleno del punto
		Chart.defaults.global.elements.point.borderWidth = 1; // Tamaño del borde del punto
		Chart.defaults.global.elements.point.borderColor = 'rgba(0,0,0,0.3)'; // Color del borde del punto
		Chart.defaults.global.elements.point.hoverRadius = 7; // Tamaño del radio del punto al pasar sobre el
		Chart.defaults.global.elements.point.hoverBorderRadius = 2; // hover al borde
		Chart.defaults.global.elements.point.hitRadius = 3;

	}
	// Creamos una nueva grafica de barra vertical
	// @param id identificador del lienzo donde se creara la grafica
	// @param label Etiqueta para la tabla
	// @param labels Objeto con las etiquetas para las columnas
	// @param data Objeto con los datos especificos para cada columna
	// @param borderSize Tamaño del grosor del border
	// @param opacity Opacidad para los fondos de las columnas
	createBar(id, label, labels, data, borderSize = 1, opacity = 9)
	{
		let ctx; // Lienzo para la grafica
		let background = []; // Colores de fondo
		let border = []; // Colores de borde

		// Obtenemos el contexto donse se imprimira la grafica
		if(document.getElementById(id)){
			ctx = document.getElementById(id);
		} else {
			console.log('El identificador para la grafica no existe');
			return
		}

		// Creamos los obetos background y los border
		for(let i = 0; i < labels.length; i++){
			// Background
			background.push('rgba(' + this.colors[i] + ',0.' + opacity + ')');
			// Borders
			border.push('rgba(' + this.colors[i] + ',1)');
		}

		// Configuramos la grafica
		let myChart = new Chart(ctx, {
			type: 'bar', // Tipo de grafica (bar)
			data: { // Datos de la grafica
				//labels: , // Etiquetas para la grafica
				labels: labels,
		        datasets: [{
		            label: label, // Etiqueta para la columna
		            data: data, // Datos de cada columna
		            backgroundColor: background, // Fondos para las columnas
		            borderColor: border, // Bordes para las columnas
		            borderWidth: borderSize // Tamaño del borde
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
	}
	// Creamos una nueva grafica de barra horizontal
	// @param id identificador del lienzo donde se creara la grafica
	// @param label Etiqueta para la tabla
	// @param labels Objeto con las etiquetas para las columnas
	// @param data Objeto con los datos especificos para cada columna
	// @param borderSize Tamaño del grosor del border
	// @param opacity Opacidad para los fondos de las columnas
	createHorizontalBar(id, label, labels, data, borderSize = 1, opacity = 7)
	{
		let ctx; // Lienzo para la grafica
		let background = []; // Colores de fondo
		let border = []; // Colores de borde

		// Obtenemos el contexto donse se imprimira la grafica
		if(document.getElementById(id)){
			ctx = document.getElementById(id);
		} else {
			console.log('El identificador para la grafica no existe');
			return
		}

		// Creamos los obetos background y los border
		for(let i = 0; i < labels.length; i++){
			// Background
			background.push('rgba(' + this.colors[i] + ',0.' + opacity + ')');
			// Borders
			border.push('rgba(' + this.colors[i] + ',1)');
		}

		// Configuramos la grafica
		let myChart = new Chart(ctx, {
			type: 'horizontalBar', // Tipo de grafica (bar)
			data: { // Datos de la grafica
				//labels: , // Etiquetas para la grafica
				labels: labels,
		        datasets: [{
		            label: label, // Etiqueta para la columna
		            data: data, // Datos de cada columna
		            backgroundColor: background, // Fondos para las columnas
		            borderColor: border, // Bordes para las columnas
		            borderWidth: borderSize // Tamaño del borde
		        }]
		    },
		    options: {
		        scales: {
		            xAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
	}
	// Crea una grafica de linea [pag. 14 documentacion]
	// @param id identificador del lienzo donde se creara la grafica
	// @param label Etiqueta para la tabla
	// @param labels Objeto con las etiquetas para las columnas
	// @param data Objeto con los datos especificos para cada columna
	createLine(id, label, labels, data)
	{
		let ctx; // Lienzo para la grafica
		let background = []; // Colores de fondo
		let border = []; // Colores de borde

		// Obtenemos el contexto donse se imprimira la grafica
		if(document.getElementById(id)){
			ctx = document.getElementById(id);
		} else {
			console.log('El identificador para la grafica no existe');
			return
		}

		// Configuramos la grafica
		let myChart = new Chart(ctx, {
			type: 'line', // Tipo de grafica (line)
			data: {
				labels: labels, // Etiquetas para columnas
				datasets: [{
					label: label, // Titulo para la grafica
					data: data // Datos a mostrar
				}]
			},
			options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
	}
	// Crea una grafica de tipo pie
	// @param id identificador del lienzo donde se creara la grafica
	// @param labels Objeto con las etiquetas para las columnas
	// @param data Objeto con los datos especificos para cada columna
	// @param opacity opacidad para el fondo de cada columna
	createPie(id, labels, data, opacity = 7)
	{
		let ctx; // Lienzo para la grafica
		let background = []; // Colores de fondo
		let hoverBackground = []; // Colores de fondo hover
		let border = []; // Colores de borde

		// Obtenemos el contexto donse se imprimira la grafica
		if(document.getElementById(id)){
			ctx = document.getElementById(id);
		} else {
			console.log('El identificador para la grafica no existe');
			return
		}

		// Creamos los obetos background y los border
		for(let i = 0; i < labels.length; i++){
			// Background
			background.push('rgba(' + this.colors[i] + ',0.' + opacity + ')');
			// HoverBackgroundColor
			hoverBackground.push('rgba(' + this.colors[i] + ',1)')
			// Borders
			border.push('rgba(' + this.colors[i] + ',1)');
		}

		// Configuramos la grafica
		let myChart = new Chart(ctx, {
			type: 'pie', // Tipo de grafica (bar)
			data: {
				labels: labels, // Etiquetas para columnas
				datasets: [{
					data: data,
					backgroundColor: background,
					hoverBackgroundColor: hoverBackground
				}]
			}
		});
	}
	// Crea una grafica de tipo doughnut
	// @param id identificador del lienzo donde se creara la grafica
	// @param labels Objeto con las etiquetas para las columnas
	// @param data Objeto con los datos especificos para cada columna
	// @param opacity opacidad para el fondo de cada columna
	createDoughnut(id, labels, data, opacity = 7)
	{
		let ctx; // Lienzo para la grafica
		let background = []; // Colores de fondo
		let hoverBackground = []; // Colores de fondo hover
		let border = []; // Colores de borde

		// Obtenemos el contexto donse se imprimira la grafica
		if(document.getElementById(id)){
			ctx = document.getElementById(id);
		} else {
			console.log('El identificador para la grafica no existe');
			return
		}

		// Creamos los obetos background y los border
		for(let i = 0; i < labels.length; i++){
			// Background
			background.push('rgba(' + this.colors[i] + ',0.' + opacity + ')');
			// HoverBackgroundColor
			hoverBackground.push('rgba(' + this.colors[i] + ',1)')
			// Borders
			border.push('rgba(' + this.colors[i] + ',1)');
		}

		// Configuramos la grafica
		let myChart = new Chart(ctx, {
			type: 'doughnut', // Tipo de grafica (bar)
			animation: {
				animateScale: true
			},
			data: {
				labels: labels, // Etiquetas para columnas
				datasets: [{
					data: data,
					backgroundColor: background,
					hoverBackgroundColor: hoverBackground
				}]
			}
		});
	}
}
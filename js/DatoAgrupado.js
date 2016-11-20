/*****************************************************
Clase para trabajar con tabla de datos agrupados
*****************************************************/

class DatoAgrupado
{
	// Constructor
	constructor()
	{
		this.build = new Build(); // Creamos una instancia de Build
		this.controlFilas = 1; // Control para filas
		this.controlColumnas = 4; // Control para columnas
		this.process = new Process(); // Instanciamos la clase process
		this.chart = new ChartJs(); // Instanciamos la clase Chartjs
		this.letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];
	}
	// Metodo que agrega una fila
	addFile()
	{
		let html = "";

		this.controlFilas++; // Aumentamos el control

		// Obtenemos la tabla
		let table = document.getElementById('dato-agrupado');
		// Insertamos una fila en la penultima posicion
		let row = table.insertRow(parseInt(table.rows.length));
		// Agregamos la primer columna
		let cell1 = row.insertCell(0);
		cell1.innerHTML = "<input type='text' id='" + this.controlFilas + "1' placeholder='Valor' onkeyup=datoNoAgrupado.moveColumn(event)>";
		// Agregamos la segunda columna
		let cell2 = row.insertCell(1);
		cell2.innerHTML = "<input type='text' id='" + this.controlFilas + "2' placeholder='Valor' onkeyup=datoNoAgrupado.moveColumn(event)>";
		// Agregamos la tercera columna
		let cell3 = row.insertCell(2);
		cell3.innerHTML = "<input type='text' id='" + this.controlFilas + "3' placeholder='Valor' onkeyup=datoNoAgrupado.moveColumn(event)>";
		// Agregamos la cuarta columna
		let cell4 = row.insertCell(3);
		cell4.innerHTML = "<input type='text' id='" + this.controlFilas + "4' placeholder='Valor' onkeyup='return datoNoAgrupado.keyNoAgrupado(event);'>";
		
		// Hacemos focus
		document.getElementById(this.controlFilas + '1').focus();
	}
	// Método para insertar tabla nueva de datos no agrupados
	createTable()
	{
		// Cambiamos el bloque del menu
		this.build.blockOne('new'); // Creamos el menu del bloque uno
		// Reseteamos los controles
		this.controlFilas = 1;
		this.controlColumnas = 4;

		let table = document.createElement('table'); // Creamos una table
		table.setAttribute('id', 'dato-agrupado');
		table.innerHTML = "<caption class='padding'>Tabla de datos agrupados<caption>";
		let row = table.insertRow(0); // Insertamos fila 1
		let cell = row.insertCell(0);
		let text = document.createTextNode('Columna');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode('Tamaño de clase');
		cell.appendChild(text);
		cell = row.insertCell(2);
		text = document.createTextNode('Marca de clase K');
		cell.appendChild(text);
		cell = row.insertCell(3);
		text = document.createTextNode('N° de observaciones');
		cell.appendChild(text);
		let row2 = table.insertRow(1); // Insertamos fila 2
		let cell1 = row2.insertCell(0);
		text = document.createTextNode('A');
		cell1.appendChild(text);
		let cell2 = row2.insertCell(1);
		cell2.innerHTML = "De <input type='text' id='11' class='agrupado' placeholder='Valor' onkeyup=datoNoAgrupado.moveColumn(event)>A<input type='text' id='12' class='agrupado' onkeyup=datoNoAgrupado.moveColumn(event) placeholder='Valor'>";
		let cell3 = row2.insertCell(2);
		let cell4 = row2.insertCell(3);
		cell4.innerHTML = "<input type='text' id='13' onkeyup=datoNoAgrupado.keyNoAgrupado(event) placeholder='Valor'>";

		document.getElementById('main-content').appendChild(table); // Inyectamos

		let html = "";

		// Creamos el bloque html
		html += "<div class='right'>" +
				"<input type='hidden' id='controlFilas' value='2'>" +
				"<p><button onclick=datoNoAgrupado.processData()>Procesar</button></p>" +
			"</div>" +
			"<div id='inject'></div>";

		// Retornamos el bloque
		document.getElementById('main-content').innerHTML += html; // Inyectamos
	}
	// Método que se ejecuta al presinar una tecla
	// @param e evento disparado
	keyNoAgrupado(e)
	{
		let key = window.event ? window.event.keyCode : e.which; // Obtenemos la tecla presionada
		let id = e.target.getAttribute('id'); // Obtenemos el ID del elemento presionado
		let nextId = parseInt(id) + 7; // Calculamos el siguiente ID
		let value = e.target.value; // Obtenemos el valor del input
		let control = this.controlFilas * 10 + 4; // Control de la ultima fila

		// Para enter
		if(key == 13){
			// Verificamos si la tecla fue presionada en la ultima fila insertada
			if(id == control){
				this.addFile(); // Agregamos una fila nueva
			} else {
				// hacemos focus al siguiente elemento
				// Hacemos focus
				document.getElementById(nextId).focus();
			}
			return true;
		}

		// Si no regresamos por defecto
		return false;
	}
	// Metodo que mueve el cursor a la siguiente columna
	// @param e evento disparado
	moveColumn(e)
	{
		let key = window.event ? window.event.keyCode : e.which; // Obtenemos la tecla presionada
		let id = parseInt(e.target.getAttribute('id')); // Obtenemos el ID del elemento presionado

		if(key == 13){
			id++; // Aumentamos en uno el ID
			document.getElementById(id).focus();
		}
	}
	// Metodo que mueve el cursor a la siguiente fila
	// @param e evento disparado
	moveFile(e)
	{
		let key = window.event ? window.event.keyCode : e.which; // Obtenemos la tecla presionada
		let id = parseInt(e.target.getAttribute('id')); // Obtenemos el ID del elemento presionado

		if(key == 13){
			id += 9; // Aumentamos en uno el ID
			document.getElementById(id).focus();
		}
	}
	// metodo para procesar la tabla de distribucion de frecuencia
	processData()
	{
		
	}
}
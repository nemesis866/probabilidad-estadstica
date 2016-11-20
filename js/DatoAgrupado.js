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
		cell1.innerHTML = "<input type='text' id='" + this.controlFilas + "1' placeholder='Valor' onkeyup=datoAgrupado.moveColumn(event)>";
		// Agregamos la segunda columna
		let cell2 = row.insertCell(1);
		cell2.innerHTML = "<input type='text' id='" + this.controlFilas + "2' placeholder='Valor' onkeyup=datoAgrupado.moveColumn(event)>";
		// Agregamos la tercera columna
		let cell3 = row.insertCell(2);
		cell3.innerHTML = "<input type='text' id='" + this.controlFilas + "3' placeholder='Valor' onkeyup=datoAgrupado.moveColumn(event)>";
		// Agregamos la cuarta columna
		let cell4 = row.insertCell(3);
		cell4.innerHTML = "<input type='text' id='" + this.controlFilas + "4' placeholder='Valor' onkeyup='return datoAgrupado.keyNoAgrupado(event);'>";
		
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
		table.innerHTML = "<caption class='padding'>Tabla de datos desordenados<caption>";
		let row2 = table.insertRow(0); // Insertamos fila 2
		let cell1 = row2.insertCell(0);
		cell1.innerHTML = "<input type='text' id='11' placeholder='Variable' onkeyup=datoAgrupado.moveColumn(event) placeholder='Valor'>";
		let cell2 = row2.insertCell(1);
		cell2.innerHTML = "<input type='text' id='12' placeholder='Variable' onkeyup=datoAgrupado.moveColumn(event) placeholder='Valor'>";
		let cell3 = row2.insertCell(2);
		cell3.innerHTML = "<input type='text' id='13' placeholder='Variable' onkeyup=datoAgrupado.moveColumn(event) placeholder='Valor'>";
		let cell4 = row2.insertCell(3);
		cell4.innerHTML = "<input type='text' id='14' placeholder='Variable' onkeyup=datoAgrupado.keyNoAgrupado(event) placeholder='Valor'>";

		document.getElementById('main-content').appendChild(table); // Inyectamos

		let html = "";

		// Creamos el bloque html
		html += "<div class='right'>" +
				"<input type='hidden' id='controlFilas' value='2'>" +
				"<p><button onclick=datoAgrupado.processData()>Procesar</button></p>" +
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
		let f = this.controlFilas; // Filas
		let c = this.controlColumnas; // Columnas
		let data = []; // Matriz para datos
		let control = 0; // Control para ingreso de datos

		// Obtenemos todos los datos de la tabla
		for(let i = 0; i < f; i++){
			for(let j = 0; j < c; j++){
				// Verificamos si los campos estan con datos
				if(document.getElementById((i+1)+''+(j+1)).value.length > 0){
					data[control] = parseFloat(document.getElementById((i+1)+''+(j+1)).value);
				} else {
					data[control] = 0;
				}
				control++; // Aumentamos el control
			}
		}

		// Generamos la tabla de datos ordenada
		let table = document.createElement('table'); // Creamos una table
		table.setAttribute('id', 'dato-agrupado-ord');
		table.innerHTML = "<caption class='padding'>Tabla con datos ordenados<caption>";
		le filas = data.length / 4;

		for(let i = 0; i < filas; i++){
			let row = table.insertRow(i); // Insertamos fila
			for(let j = 0; j < 4; j++){
				let cell = row.insertCell(j); // Incertamos celda
				let cellText = createTextNode();
				cell.appendChild(cellText);
			}
		}

		document.getElementById('main-content').appendChild(table); // Inyectamos	
	}
}
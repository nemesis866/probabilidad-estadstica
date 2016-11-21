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
		this.controlColumnas = 3; // Control para columnas
		this.process = new ProcessAgrupado(); // Instanciamos la clase process
		this.chart = new ChartJs(); // Instanciamos la clase Chartjs
		this.letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];
	}
	// Metodo que agrega una fila
	addFile()
	{
		this.controlFilas++; // Aumentamos el control

		// Obtenemos la tabla
		let table = document.getElementById('dato-agrupado');
		// Insertamos una fila en la penultima posicion
		let row = table.insertRow(parseInt(table.rows.length) - 1);
		// Agregamos la primer columna
		let cell1 = row.insertCell(0);
		let text = document.createTextNode(this.letter[this.controlFilas - 1]);
		cell1.appendChild(text);
		let cell2 = row.insertCell(1);
		cell2.innerHTML = "De <input type='text' id='"+this.controlFilas+"1' class='agrupado' placeholder='Valor' onkeyup=datoAgrupado.moveColumn(event)>A<input type='text' id='"+this.controlFilas+"2' class='agrupado' onkeyup=datoAgrupado.moveColumn(event) placeholder='Valor'>";
		let cell3 = row.insertCell(2);
		cell3.setAttribute('id', this.controlFilas+'f');
		let cell4 = row.insertCell(3);
		cell4.innerHTML = "<input type='text' id='"+this.controlFilas+"3' onkeyup=datoAgrupado.keyAgrupado(event) placeholder='Valor'>";
		
		// Hacemos focus
		document.getElementById(this.controlFilas + '1').focus();
	}
	// Metodo para realizar calculos
	calc()
	{
		let filas = this.controlFilas; // Obtenemos el control
		let columnas = this.controlColumnas; // Obtenemos el control
		let sumaClase = 0.0; // Suma para la frecuencia
		let resClase = 0.0; // Resultado del porcentaje
		let totalClase = 0.0;
		let totalFrecuencia = 0.0;

		// Recorremos la tabla
		for(let i = 0; i < filas; i++){
			for(let j = 0; j < columnas; j++){
				// Verificamos si hay un dato
				if(document.getElementById((i+1)+''+(j+1)).value.length > 0){
					// Verificamos que solo se sumen columnas 1 y 2
					if(j == 0 || j == 1){
						sumaClase += parseFloat(document.getElementById((i+1)+''+(j+1)).value);
					} else if(j == 2){
						totalFrecuencia += parseFloat(document.getElementById((i+1)+''+(j+1)).value);
					}
				}
			}

			resClase = sumaClase / 2;
			document.getElementById((i+1)+'f').innerHTML = resClase; // Intectamos
			totalClase += resClase;
			sumaClase = 0; // Reseteamos la suma
			resClase = 0;
		}

		// Inyectamos los totales
		document.getElementById('suma1').innerHTML = totalClase;
		document.getElementById('suma2').innerHTML = totalFrecuencia;
	}
	// Método para insertar tabla nueva de datos no agrupados
	createTable()
	{
		// Cambiamos el bloque del menu
		this.build.blockThree('new'); // Creamos el menu del bloque uno
		// Reseteamos los controles
		this.controlFilas = 1;
		this.controlColumnas = 3;

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
		cell2.innerHTML = "De <input type='text' id='11' class='agrupado' placeholder='Valor' onkeyup=datoAgrupado.moveColumn(event)>A<input type='text' id='12' class='agrupado' onkeyup=datoAgrupado.moveColumn(event) placeholder='Valor'>";
		let cell3 = row2.insertCell(2);
		cell3.setAttribute('id', '1f');
		let cell4 = row2.insertCell(3);
		cell4.innerHTML = "<input type='text' id='13' onkeyup=datoAgrupado.keyAgrupado(event) placeholder='Valor'>";
		row = table.insertRow(2); // Insertamos fila 3
		cell = row.insertCell(0);
		cell.setAttribute('class', 'padding')
		cell = row.insertCell(1);
		cell.setAttribute('class', 'padding')
		text = document.createTextNode('Sumas');
		cell.appendChild(text);
		cell = row.insertCell(2);
		cell.setAttribute('id', 'suma1')
		text = document.createTextNode('0');
		cell.appendChild(text);
		cell = row.insertCell(3);
		cell.setAttribute('id', 'suma2')
		text = document.createTextNode('0');
		cell.appendChild(text);

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
	keyAgrupado(e)
	{
		let key = window.event ? window.event.keyCode : e.which; // Obtenemos la tecla presionada
		let id = e.target.getAttribute('id'); // Obtenemos el ID del elemento presionado
		let nextId = parseInt(id) + 8; // Calculamos el siguiente ID
		let value = e.target.value; // Obtenemos el valor del input
		let control = this.controlFilas * 10 + 3; // Control de la ultima fila

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

		this.processCalc(key);

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

		this.processCalc(key);
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
	// Metodo para procesar calculos
	// @param key llave presionada
	processCalc(key)
	{
		// Verificamos si es un numero
		let bool = /\d/.test(String.fromCharCode(key));
		if(bool){
			this.calc(); // Realizamos los calculos
			return true;
		}
	}
	// metodo para procesar la tabla de distribucion de frecuencia
	processData()
	{
		let filas = this.controlFilas; // Filas
		let columnas = this.controlColumnas; // Columnas
		let sumaClase = 0; // Sumas del tamaño de la clase
		let data = []; // Matriz para datos
		data[0] = []; // Init
		data[1] = []; // fin
		data[2] = []; // marca clase
		data[3] = []; // Unidades

		// Recogemos los datos
		for(let i = 0; i < filas; i++){
			for(let j = 0; j < columnas; j++){
				// Verificamos si hay un dato
				if(document.getElementById((i+1)+''+(j+1)).value.length > 0){
					// Verificamos que solo se sumen columnas 1 y 2
					if(j == 0 || j == 1){
						sumaClase += parseFloat(document.getElementById((i+1)+''+(j+1)).value);
						if(j == 0){
							// Guardamos datos
							data[0].push(parseFloat(document.getElementById((i+1)+''+(j+1)).value));
						} else {
							// Guardamos datos
							data[1].push(parseFloat(document.getElementById((i+1)+''+(j+1)).value));
						}
					} else if(j == 2){
						// Guardamos datos
						data[3].push(parseFloat(document.getElementById((i+1)+''+(j+1)).value));
					}
				} else {
					// Inyectamos
					document.getElementById((i+1)+''+(j+1)).value = 0;
				}
			}
			data[2].push(sumaClase / 2); // Guardamos datos
			sumaClase = 0; // Reseteamos
		}

		// Mostramos texto para resultados
		let h = document.createElement('h2');
		h.setAttribute('class', 'results-title');
		let hText = document.createTextNode('Resultados:');
		h.appendChild(hText);
		document.getElementById('main-content').appendChild(h);

		// Obtenem0s medidas de tendencia central
		let table = document.createElement('table');
		table.setAttribute('id', 'medidas');
		let caption = document.createElement('caption');
		caption.setAttribute('class', 'padding');
		let text = document.createTextNode('Medidas de tendencia central');
		caption.appendChild(text);
		table.appendChild(caption);
		let row = table.insertRow(0);
		let cell = row.insertCell(0);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Media aritmética');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode(this.process.mediaAritmetica(data).toFixed(2));
		cell.appendChild(text);
		row = table.insertRow(1);
		cell = row.insertCell(0);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Moda');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode(this.process.moda(data).toFixed(2));
		cell.appendChild(text);
		row = table.insertRow(2);
		cell = row.insertCell(0);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Mediana');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode(this.process.mediana(data).toFixed(2));
		cell.appendChild(text);
		row = table.insertRow(3);
		cell = row.insertCell(0);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Media armónica');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode(this.process.mediaArmonica(data).toFixed(2));
		cell.appendChild(text);
		row = table.insertRow(4);
		cell = row.insertCell(0);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Media geométrica');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode(this.process.mediaGeometrica(data).toFixed(2));
		cell.appendChild(text);
		document.getElementById('main-content').appendChild(table);

		// Obtenem0s medidas de dispersión
		table = document.createElement('table');
		table.setAttribute('id', 'medidas');
		caption = document.createElement('caption');
		caption.setAttribute('class', 'padding');
		text = document.createTextNode('Medidas de dispersión');
		caption.appendChild(text);
		table.appendChild(caption);
		row = table.insertRow(0);
		cell = row.insertCell(0);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Desviación media');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode(this.process.desviacionMedia(data).toFixed(2));
		cell.appendChild(text);
		row = table.insertRow(1);
		cell = row.insertCell(0);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Desviación estandar');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode(this.process.desviacionEstandar(data).toFixed(2));
		cell.appendChild(text);
		row = table.insertRow(2);
		cell = row.insertCell(0);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Varianza');
		cell.appendChild(text);
		cell = row.insertCell(1);
		text = document.createTextNode(this.process.varianza(data).toFixed(2));
		cell.appendChild(text);
		document.getElementById('main-content').appendChild(table);
	}
}
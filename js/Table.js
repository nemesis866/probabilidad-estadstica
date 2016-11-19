/*****************************************************
Clase para trabajar con tablas
*****************************************************/

class Table
{
	// Constructor
	constructor()
	{
		this.controlNoAgrupado = 2; // Control para tabla no agrupado
	}
	// Metodo que agrega una fila
	addFile()
	{
		let html = "";
		this.controlNoAgrupado++; // Aumentamos el control

		// Construimos el bloque de codigo
		html += "<td><input type='text' id='" + this.controlNoAgrupado + "1' placeholder='Valor' onkeyup=table.moveColumn(event)></td>" +
			"<td><input type='text' id='" + this.controlNoAgrupado + "2' placeholder='Valor' onkeyup='return table.keyNoAgrupado(event);'></td>" +
			"<td id='" + this.controlNoAgrupado + "3'></td>";

		// Obtenemos la tabla
		let table = document.getElementById('tabla-no-agrupado');
		// Insertamos una fila en la penultima posicion
		let row = table.insertRow(parseInt(table.rows.length) - 1);
		// Inyectamos el bloque de codigo
		row.innerHTML = html;
		// Hacemos focus
		document.getElementById(this.controlNoAgrupado + '1').focus();
	}
	// Método para calcular datos no agrupados
	calcNoAgrupado()
	{
		let control = this.controlNoAgrupado; // Obtenemos el control
		let suma = 0; // Suma para la frecuencia
		let res; // Resultado del porcentaje

		// Recorremos la tabla
		for(let i = 2; i <= control; i++){
			// obtenemos el dato
			if(parseInt(document.getElementById(i + '2').value) >= 0){
				// Sumamos (primero transformamos a tipo integer)
				suma += parseInt(document.getElementById(i + '2').value);
			}
		}

		// Recorremos la tabla para calcular porcentajes
		for(let i = 2; i <= control; i++){
			if(parseFloat(document.getElementById(i + '2').value) > 0.0){
				let subTotal = parseFloat(document.getElementById(i + '2').value);
				res = (subTotal * 100) / suma;
				// Inyectamos el resultado
				document.getElementById(i + '3').innerHTML = res.toFixed(2) + '%';
			} else {
				// Inyectamos el resultado
				document.getElementById(i + '3').innerHTML = '0.00%';
			}
		}

		// Inyectamos los totales
		document.getElementById('total-f').innerHTML = suma;
		if(suma === 0){
			document.getElementById('total-p').innerHTML = '0.00%';
		} else {
			document.getElementById('total-p').innerHTML = '100.00%';
		}
	}
	// Método para insertar tabla nueva de datos no agrupados
	datoNoAgrupado()
	{
		let html = "";

		// Creamos el bloque html
		html += "<table id='tabla-no-agrupado'>" +
				"<tr>" +
					"<th class='padding'>Tabla de distribución de frecuencias</th>" +
				"</tr>" +
				"<tr id='table-title'>" +
					"<td><input type='text' id='11' placeholder='Variable' onkeyup=table.moveColumn(event) value='Variable'></td>" +
					"<td><input type='text' id='12' placeholder='Variable' onkeyup=table.moveFile(event) value='Frecuencia'></td>" +
					"<td>Porcentaje</td>" +
				"</tr>" +
				"<tr>" +
					"<td><input type='text' id='21' placeholder='Valor' onkeyup=table.moveColumn(event)></td>" +
					"<td><input type='text' id='22' placeholder='Valor' onkeyup='return table.keyNoAgrupado(event);'></td>" +
					"<td id='23'></td>" +
				"</tr>" +
				// Aqui va el codigo para insertar las columnas
				"<span id='insert'></span>" +
				"<tr>" +
					"<td class='padding'>Total</td>" +
					"<td id='total-f'>0</td>" +
					"<td id='total-p'>0%</td>" +
				"</tr>" +
			"</table>" +
			"<div class='right'>" +
				"<input type='hidden' id='controlNoAgrupado' value='2'>" +
				"<p><button onclick=mainController.processDatoNoAgrupado()>Procesar</button></p>" +
			"</div>";

		// Retornamos el bloque
		return html;
	}
	// Método que se ejecuta al presuinar una tecla
	// @param e evento disparado
	keyNoAgrupado(e)
	{
		let key = window.event ? window.event.keyCode : e.which; // Obtenemos la tecla presionada
		let id = e.target.getAttribute('id'); // Obtenemos el ID del elemento presionado
		let value = e.target.value; // Obtenemos el valor del input
		
		// para punto
		if(key == 46 && value.indexOf('.') == -1){
			this.calcNoAgrupado(); // Realizamos los calculos
			return true;
		}

		// Para enter
		if(key == 13){
			this.addFile(); // Agregamos una fila nueva
			return true;
		}

		// Verificamos si es un numero
		let bool = /\d/.test(String.fromCharCode(key));
		if(bool){
			this.calcNoAgrupado(); // Realizamos los calculos
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
}
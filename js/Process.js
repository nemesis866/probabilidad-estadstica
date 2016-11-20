/*****************************************************
Clase para procesar informacion
*****************************************************/

class Process
{
	// Constructor
	Process()
	{

	}

	// Metodo para obtener el tamaño de la clase
	// @param data array con los datos
	// @size numero de clases
	clase(data, size)
	{
		let rango = this.rango(data);
		let x = rango / size;
		
		return x;
	}
	// Metodo para ordenar un array de forma ascendente
	// @param data array con los datos
	orderByAsd(data)
	{
		let auxiliar; // Auxiliar para guardar el valor anterior del vector

		// Recorremos el vector
		for(let i = 0; i < data.length - 1; i++){
        	for(let j = i + 1; j < data.length; j++){
        		// Verificamos si el valor anterior es mayor al actual
            	if(data[i] > data[j]){
                    // Si es asi, intercambiamos valores
                    auxiliar = data[i];
                    data[i] = data[j];
                    data[j] = auxiliar;
            	}
        	}
		}

		// Retornamos el vector ordenado
		return data;
	}
	// Metodo para obtener el rango
	// @param data array con los datos
	rango(data)
	{
		let x = data[data.length - 1] - data[0];

		return x;
	}
	// Metodo para mostrar tabla ordenada
	// @param data array con los datos a trabajar
	// @param size numero de clase
	tablaDistribucionFrecuencia(data, size)
	{
		// Ordenamos los datos
		data = this.orderByAsd(data);
		let filas = (data.length / size) + 1;

		// Generamos la tabla de datos ordenada
		let table = document.createElement('table'); // Creamos una table
		table.setAttribute('id', 'dato-agrupado-ord');
		table.innerHTML = "<caption class='padding'>Tabla de distribución de frecuencia (tabla 3)<caption>";
		document.getElementById('main-content').appendChild(table); // Inyectamos

		// Generamos los encabcezados
		let row = table.insertRow(0);
		// Columna 1
		let cell = row.insertCell(0);
		let text = document.createTextNode('Columna');
		cell.appendChild(text);
		// Columna 2
		cell = row.insertCell(1);
		text = document.createTextNode('Tamaño de clase');
		cell.appendChild(text);
		// Columna 3
		cell = row.insertCell(2);
		text = document.createTextNode('N°. de observaciones');
		cell.appendChild(text);
		// Columna 4
		cell = row.insertCell(3);
		text = document.createTextNode('Porcentajes');
		cell.appendChild(text);

		// Generamos el contenido
		let clase = this.clase(data, size);
		let init = parseFloat(data[0]); // Dato de inicio
		let fin = parseFloat(init + clase); // dato de fin
		let results = [];
		results[0] = [];
		results[1] = [];
		results[2] = [];

		for(let i = 1; i <= 5; i++){
			// Insertamos fila
			let row = table.insertRow(i);
			for(let j = 0; j < 4; j++){
				// Incertamos celda
				let cell = row.insertCell(j);

				// Verificamos si es la ultima fila
				if(i == 5){
					let text;
					switch(j){
						case 1:
							text = document.createTextNode('Sumas');
							cell.appendChild(text);
							break;
						case 2:
							text = document.createTextNode(data.length);
							cell.appendChild(text);
							break;
						case 3:
							text = document.createTextNode('100%');
							cell.appendChild(text);
							break;
					}
				} else {
					let text;
					let control = 0;
					switch(j){
						case 0:
							if(i == 1) text = document.createTextNode('A');
							else if(i == 2) text = document.createTextNode('B');
							else if(i == 3) text = document.createTextNode('C');
							else if(i == 4) text = document.createTextNode('D');

							cell.appendChild(text);
							break;
						case 1:
							text = document.createTextNode('De '+init.toFixed(1)+' a '+fin.toFixed(1));
							cell.appendChild(text);
							results[0].push('De '+init.toFixed(1)+' a '+fin.toFixed(1));
							break;
						case 2:
							// Recorremos el array
							for(let i = 0; i < data.length; i++){
								// Verificamos si esta dentro de los rangos
								if(data[i] >= init && data[i] <= fin){
									// Aumentamos el control
									control++;
								}
							}
							text = document.createTextNode(control);
							cell.appendChild(text);
							results[1].push(control);
							break;
						case 3:
							// Recorremos el array
							for(let i = 0; i < data.length; i++){
								// Verificamos si esta dentro de los rangos
								if(data[i] >= init && data[i] <= fin){
									// Aumentamos el control
									control++;
								}
							}
							// Obtenemos el porcentaje
							let porcentaje = 0;
							if(control == 0){
								porcentaje = 0;
							} else {
								porcentaje = (100.0 / data.length) * control;
							}
							text = document.createTextNode(porcentaje.toFixed(2)+'%');
							cell.appendChild(text);
							results[2].push(porcentaje);
							break;
					}
				}
			}
			// Actualizamos parametros
			init = fin + 0.1;
			init = parseFloat(init);
			fin = init + clase - 0.1;
			fin = parseFloat(fin);
		}
		// Regresamos datos
		return results;
	}
	// Metodo para mostrar tabla ordenada
	// @param data array con los datos a trabajar
	// @param size numero de clase
	tablaOrdenada(data, size)
	{
		// Ordenamos los datos
		data = this.orderByAsd(data);

		// Generamos la tabla de datos ordenada
		let table = document.createElement('table'); // Creamos una table
		table.setAttribute('id', 'dato-agrupado-ord');
		table.innerHTML = "<caption class='padding'>Tabla con datos ordenados (tabla 2)<caption>";
		let filas = data.length / size;
		let controlAux = 0;
		document.getElementById('main-content').appendChild(table); // Inyectamos

		// Creamos las tablas
		for(let i = 0; i < filas; i++){
			let row = table.insertRow(i); // Insertamos fila
			for(let j = 0; j < 4; j++){
				let cell = row.insertCell(j); // Incertamos celda
				cell.setAttribute('class', 'padding');
				cell.setAttribute('id', (i+11)+''+(j+11));
				controlAux++;
			}
		}

		// Llenamos la tabla
		controlAux = 0;
		for(let i = 0; i < 4; i++){ // Columnas
			for(let j = 0; j < filas; j++){ // filas
				document.getElementById((j+11)+''+(i+11)).innerHTML = data[controlAux];
				console.log(data[controlAux]);
				controlAux++;
			}
		}
	}
	// Metodo para mostrar tabla ordenada
	// @param data array con los datos a trabajar
	// @param size numero de clase
	tablaRangoClase(data, size)
	{
		// Ordenamos los datos
		data = this.orderByAsd(data);

		// Obtenemos el rango
		let div = document.createElement('div');
		// Obtenemos el tamaño de la clase
		let p = document.createElement('p');
		let text = document.createTextNode('Rango: '+ this.rango(data).toFixed(2));
		p.appendChild(text);
		div.appendChild(p);
		let p2 = document.createElement('p');
		let text2 = document.createTextNode('Tamaño de clase: '+ this.clase(data, size ).toFixed(2));
		p2.appendChild(text2);
		div.appendChild(p2);
		document.getElementById('main-content').appendChild(div); // Inyectamos
	}
}
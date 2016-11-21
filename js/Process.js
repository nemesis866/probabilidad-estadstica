/*****************************************************
Clase para procesar informacion de datos no agrupados
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
		// Ordenamos los datos
		data = this.orderByAsd(data);

		let rango = this.rango(data);
		let x = rango / size;
		
		return x;
	}
	// Metodo para obtener la desviacion estandar
	// @param data array con los datos
	desviacionEstandar(data)
	{
		let size = data.length;
		let suma = 0;
		let sumaTotal = 0;
		let promedio = 0;
		let result = 0;

		for(let i = 0; i < size; i++){
			suma += data[i];
		}

		promedio = suma / size;

		for(let i = 0; i < size; i++){
			sumaTotal += Math.pow(data[i] - promedio, 2);
		}

		result = sumaTotal / (size - 1);

		return Math.pow(result, 1/2);
	}
	// Metodo para obtener la desviacion media
	// @param data array con los datos
	desviacionMedia(data)
	{
		let size = data.length;
		let suma = 0;
		let sumaTotal = 0;
		let promedio = 0;

		for(let i = 0; i < size; i++){
			suma += data[i];
		}

		promedio = suma / size;

		for(let i = 0; i < size; i++){
			sumaTotal += Math.abs(data[i] - promedio);
		}

		return sumaTotal / size;
	}
	// Metodo para obtener la media aritmetica
	// @param data array con los datos
	mediaAritmetica(data)
	{
		let size = data.length;
		let suma = 0;
		let result = 0;

		// Sumamos los ratos
		for(let i = 0; i < size; i++){
			suma += data[i];
		}

		// Obtenemos la media
		result = suma / size;

		return result;
	}
	// Metodo para obtener la media armonaca
	// @param data array con los datos
	mediaArmonica(data)
	{
		let size = data.length;	
		let total = 0; // Total de digitos sumados
		let result = 0; // Resultado

		// Sumamos los valores
		for(let i = 0; i < size; i++){
			total += 1 / data[i];
		}

		// Calculamos el resultado
		result = size / total;

		return result;
	}
	// Metodo para obtener la media geometrica
	// @param data array con los datos
	mediaGeometrica(data)
	{
		let size = data.length;
		let total = 1; // Total de digitos multiplicados
		let result = 0; // Resultado

		// Multiplicamos los valores
		for(let i = 0; i < size; i++){
			total *= data[i];
		}

		// Sacamos la raiz
		result = Math.pow(total, 1 / size);

		return result;
	}
	// Metodo para obtener la mediana
	// @param data array con los datos
	mediana(data)
	{
		let size = data.length;
		let result = 0;

		// Verificamos si el tamaño es par
		if(size % 2 == 0){
			size = size / 2;
			result = (data[size - 1] + data[size]) / 2;
		} else {
			size = (size + 1) / 2;
			result = data[size - 1];
		}

		return result;
	}
	// Metodo para obtener la moda
	// @param data array con los datos
	moda(data)
	{
		let size = data.length;
		let suma = 0; // Suma de valores repetidos
		let x = 0; // Valor a comprobar
		let aux = 0; // Control auxiliar
		let controlSuma = 0; // Control para suma
		let result = 0; // Resultado
		let control = 0; // Control de repeticiones

		for(let i = 0; i < size; i++){
			control = 0;
			x = data[i];
			for(let j = 0; j < size; j++){
				if(x == data[j]){
					control++;
				}
			}
			// Comprobamos los resultados
			if(control > aux){
				result = x;
				suma = x; // reseteamos suma
				controlSuma = 1; // reseteamos control
			} else if(control == aux){
				suma += x;
				controlSuma++;
			}
			// Actualizamos datos
			aux = control;
		}

		// Obtenemos resultado
		if(suma > 0){
			result = suma / controlSuma;
		}

		// Retornamos resultado
		return result;
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
		// Ordenamos los datos
		data = this.orderByAsd(data);

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
		cell.setAttribute('class', 'padding');
		let text = document.createTextNode('Columna');
		cell.appendChild(text);
		// Columna 2
		cell = row.insertCell(1);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('Tamaño de clase');
		cell.appendChild(text);
		// Columna 3
		cell = row.insertCell(2);
		cell.setAttribute('class', 'padding');
		text = document.createTextNode('N°. de observaciones');
		cell.appendChild(text);
		// Columna 4
		cell = row.insertCell(3);
		cell.setAttribute('class', 'padding');
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
				cell.setAttribute('class', 'padding');

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
				controlAux++;
			}
		}
	}
	// Metodo para obtener la varianza
	// @param data array con los datos
	varianza(data)
	{
		let size = data.length;
		let suma = 0;
		let sumaTotal = 0;
		let promedio = 0;

		for(let i = 0; i < size; i++){
			suma += data[i];
		}

		promedio = suma / size;

		for(let i = 0; i < size; i++){
			sumaTotal += Math.pow(data[i] - promedio, 2);
		}

		return sumaTotal / (size - 1);
	}
}
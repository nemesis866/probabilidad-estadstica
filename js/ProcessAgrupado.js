/*****************************************************
Clase para procesar informacion para datos agrupados
*****************************************************/

class ProcessAgrupado
{
	// Constructor
	ProcessAgrupado()
	{

	}

	// Metodo para obtener la desviacion estandar
	// @param data array con los datos
	desviacionEstandar(data)
	{

	}
	// Metodo para obtener la desviacion media
	// @param data array con los datos
	desviacionMedia(data)
	{

	}
	// Metodo para obtener la media aritmetica
	// @param data array con los datos
	mediaAritmetica(data)
	{
		let size = data[3].length;
		let sumaUnidad = 0;
		let suma = 0;
		let result = 0;

		// Obtenemos la suma
		for(let i = 0; i < size; i++){
			sumaUnidad += data[3][i];
		}

		// Obtenemos la media aritmetica
		for(let i = 0; i < size; i++){
			suma += data[2][i] * data[3][i];
		}
		result = suma / sumaUnidad;

		return result;
	}
	// Metodo para obtener la media armonaca
	// @param data array con los datos
	mediaArmonica(data)
	{
		let size = data[3].length;	
		let total = 0; // Total de digitos sumados
		let totalAux = 0; // Total de digitos sumados
		let result = 0; // Resultado

		// Obtenemos la suma de frecuencias
		for(let i = 0; i < size; i++){
			total += data[3][i];
		}

		// Calculamos el primer resultado
		for(let i = 0; i < size; i++){
			totalAux += data[3][i] / data[2][i];
		}

		// resultado final
		result = total / totalAux;

		return result;
	}
	// Metodo para obtener la media geometrica
	// @param data array con los datos
	mediaGeometrica(data)
	{
		let size = data[3].length;
		let total = 0; // Total de digitos multiplicados
		let result = 0; // Resultado

		// Multiplicamos los valores
		for(let i = 0; i < size; i++){
			total += data[2][i] * data[3][i];
		}

		// Sacamos la raiz
		result = Math.pow(total, 1 / size);

		return result;
	}
	// Metodo para obtener la mediana
	// @param data array con los datos
	mediana(data)
	{
		let size = data[3].length;
		let result = 0;

		// Obtenemos Li
		let sumaLi = 0;
		let auxLi = 0;
		let promedioLi = 0;
		let controlLi = 0;

		// Obtenemos el promedio
		for(let i = 0; i < size; i++){
			promedioLi += data[3][i];
		}
		promedioLi = promedioLi / 2;

		for(let i = 0; i < size; i++){
			auxLi = sumaLi;
			sumaLi += data[3][i];

			if(sumaLi < promedioLi){
				controlLi++; // Aumentamos control
			} else {
				break; // Salimos
			}
		}
		controlLi--;

		// Calculamos el resultado
		result = data[0][controlLi] + ((promedioLi - auxLi) / data[3][controlLi+1]) * (data[1][controlLi + 1] - data[0][controlLi + 1]);

		return result;
	}
	// Metodo para obtener la moda
	// @param data array con los datos
	moda(data)
	{
		let size = data[3].length;
		let result = 0;
		let controlLi = 0;

		// Obtenemos la frecuencia mayor
		let lim = data[3][0];
		for(let i = 0; i < size; i++){
			if(data[3][i] > lim){
				lim = data[3][i];
			}
		}

		// Obtenemos el controlLi
		for(let i = 0; i < size; i++){
			if(data[3][i] == lim){
				break; // Salimos
			} else {
				controlLi++; // Aumentamos control
			}
		}

		// calculamos D1 y D2
		let d1 = 0, d2 = 0;
		if(controlLi == 1){
			d1 = Math.abs(data[3][controlLi]);
		} else {
			d1 = Math.abs(data[3][controlLi] - data[3][controlLi - 1]);	
		}
		if(controlLi == (size - 1)){
			d2 = Math.abs(data[3][controlLi]);
		} else {
			d2 = Math.abs(data[3][controlLi] - data[3][controlLi + 1]);
		}
		
		// Calculamos el resultado
		result = data[0][controlLi - 1] + (d1/(d1 + d2)) * (data[1][controlLi] - data[0][controlLi]);

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
	// Metodo para obtener la varianza
	// @param data array con los datos
	varianza(data)
	{

	}
}
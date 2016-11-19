/*****************************************************
Clase para construir bloques de código
*****************************************************/

class Build
{
	// Constructor de la clase
	constructor()
	{

	}
	// Metodo para construir el bloque uno
	// @param type tipo de menu a construir (normal, new, example)
	blockOne(type)
	{
		// Creamos el bloque del menu
		let div = document.createElement('div');
		div.setAttribute('class', 'center');
		let ul = document.createElement('ul');
		// Boton 1
		let li1 = document.createElement('li');
		if(type === 'normal' || type === 'example'){
			li1.setAttribute('onclick', 'mainController.newDistribucionFrecuencia()');
		}
		let li1Text = document.createTextNode('Nuevo');
		li1.appendChild(li1Text);
		// Boton 2
		let li2 = document.createElement('li');
		let li2Text = document.createTextNode('Ejemplo');
		li2.appendChild(li2Text);
		// Boton 3
		let li3 = document.createElement('li');
		li3.setAttribute('onclick', 'mainController.cancel()');
		let li3Text = document.createTextNode('Cancelar');
		li3.appendChild(li3Text);

		// Estructuramos el bloque del menu
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		div.appendChild(ul);

		// Limpiamos el bloque de codigo
		document.getElementById('main-content').innerHTML = '';
		// Insertamos el bloque de menu
		document.getElementById('main-content').appendChild(div);
	}
}
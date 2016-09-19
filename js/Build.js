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
	blockOneOne()
	{
		let menu = "";

		// Creamos el bloque del menu
		menu += "<div class='center'>" +
				"<ul>" +
					"<li onclick=mainController.newDatoNoAgrupado()>Nuevo</li>" +
					"<li>Ejemplo</li>" +
				"</ul>" +
			"</div>";

		// Insertamos el bloque de menu
		document.getElementById('main-content').innerHTML = menu;
	}
	// Método para mostrar el submenu uno
	menuOne()
	{
		let html = "";

		// Creamos el bloque
		html += "<ul>" +
				"<li onclick=mainController.subRouter(1,1)>Datos no agrupados</li>" +
				"<li>Datos agrupados</li>" +
				"<li>Datos agrupados</li>" +
				"<li onclick=mainController.close()>Cerrar</li>" +
			"</ul>";

		// Inyectamos el bloque
		document.getElementById('second').innerHTML = html;
	}
}
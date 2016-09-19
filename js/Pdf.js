/*****************************************************
Clase jsPDF - Imprimir en documento pdf
*****************************************************/

class Pdf
{
	// Constructor
	Pdf()
	{

	}
	// Imprime un area html
	// @param id identificador del area a imprimir
	printHtml(id)
	{
		// Creamos una instancia 
		let doc = new jsPDF('p', 'pt', 'a4');
		let elem;
		console.log('proceso iniciado');

		if(document.getElementById(id)){
			elem = document.getElementById(id);
		}

		// Creamos unestro propio procesador para este editor
		let specialElementHandlers = {
			'#editor': function(element, renderer){
				return true;
			}
		};

		// Creamos el contenido desde un html
		/*doc.fromHTML($('#' + id).get(0), 15, 15, {
			'width': 170, 
			'elementHandlers': specialElementHandlers
		});*/
		doc.addHTML(elem, () =>
		{
			doc.save("reporte.pdf");
			console.log('proceso terminado');
		});

		//doc.save("table.pdf");
	}
}
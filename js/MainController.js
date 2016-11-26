/*****************************************************
Controlador principal de la aplicación
*****************************************************/

class MainController
{
	// Constructor de la clase
	constructor()
	{
		// Propiedades
		this.build = new Build(); // Instancia para Build
		this.controlBlock = []; // Control para bloques
		this.controlSubmenu = []; // Control para submenus
		this.resetControlMenu(0); // Inicializamos el control para bloques
		this.table = new Table(); // Instancia para Table
		this.datoAgrupado = new DatoAgrupado(); // Instanciamos la clase
		this.datoNoAgrupado = new DatoNoAgrupado(); // Instanciamos la clase
	}
	// Metodo para cancelar una tabla
	cancel()
	{
		// Borramos el contenido principal
		document.getElementById('main-content').innerHTML = '';
		// Inyectamos la imagen de nuevo
		let div = document.createElement('div');
		div.setAttribute('class', 'center');
		let h1 = document.createElement('h1');
		let text = document.createTextNode('Proyecto final');
		h1.appendChild(text);
		let h2 = document.createElement('h2');
		text = document.createTextNode('Probabilidad y estadistica');
		h2.appendChild(text);
		let img = document.createElement('img');
		img.setAttribute('id', 'img-intro');
		img.setAttribute('src', 'img/intro.jpg');
		div.appendChild(h1);
		div.appendChild(h2);
		div.appendChild(img);
		document.getElementById('main-content').appendChild(div);
		// Reseteamos el menu
		this.resetControlMenu();
		// Habilidatmos el menu
		document.getElementById('second').style.transform = 'translateX(-100%)';
		document.getElementById('second').style.webkitTransform = 'translate(-100%)';	
	}
	// Metodo para resetear el control del router
	// @param id identificador del menu
	changeControlMenu(id)
	{
		for(let i = 1; i < 9; i++){
			if(i !== id) this.controlBlock[i] = 0;
			else this.controlBlock[i] = 1;
		}
	}
	// Método para cerrar el menu secundario
	close()
	{
		// Recorremos
		document.getElementById('second').style.transform = 'translateX(-100%)';
		document.getElementById('second').style.webkitTransform = 'translateX(-100%)';
		// Limipamos el div
		document.getElementById('second').innerHMTL = '';
		// Reseteamos el control
		this.resetControlMenu(0);
	}
	// Metodo para agregr una tabla nueva
	newDatoAgrupado()
	{
		this.datoAgrupado.createTable(); // Obtenemos la tabla
		document.getElementById('11').focus();
	}
	// Metodo para agregr una tabla nueva
	newDatoNoAgrupado()
	{
		this.datoNoAgrupado.createTable(); // Obtenemos la tabla
		document.getElementById('11').focus();
	}
	// Metodo para agregr una tabla nueva
	newDistribucionFrecuencia()
	{
		let table = this.table.distribucionFrecuencia(); // Obtenemos la tabla
		document.getElementById('main-content').innerHTML += table; // Inyectamos
		document.getElementById('11').focus();
	}
	// Metodo para resetear el control del router
	// @param id identificador del menu
	resetControlMenu()
	{
		for(let i = 1; i < 9; i++){
			this.controlBlock[i] = 0;
		}
	}
	// Metodo para resetear el control del router
	// @param id identificador del menu
	resetControlSubmenu(id)
	{

	}
	// Metodo para router del menu principal
	// @param id identificador del menu
	router(id)
	{
		// construimos la pagina a mostrar
		switch(id){
			case 1:
				if(this.controlBlock[id] === 0){
					this.changeControlMenu(id); // Actualizamos el control
					document.getElementById('second').style.transform = 'translateX(0)';
					document.getElementById('second').style.webkitTransform = 'translate(0)';
					this.build.blockOne('normal'); // Creamos el menu del bloque uno
				}
				break;
			case 2:
				if(this.controlBlock[id] === 0){
					this.changeControlMenu(id); // Actualizamos el control
					document.getElementById('second').style.transform = 'translateX(0)';
					document.getElementById('second').style.webkitTransform = 'translate(0)';
					this.build.blockTwo('normal'); // Creamos el menu del bloque uno
				}
				break;
			case 3:
				if(this.controlBlock[id] === 0){
					this.changeControlMenu(id); // Actualizamos el control
					document.getElementById('second').style.transform = 'translateX(0)';
					document.getElementById('second').style.webkitTransform = 'translate(0)';
					this.build.blockThree('normal'); // Creamos el menu del bloque uno
				}
				break;
		}
	}
}
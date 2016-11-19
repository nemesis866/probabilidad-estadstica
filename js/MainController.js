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
	}
	// Metodo para cancelar una tabla
	cancel()
	{
		// Borramos el contenido principal
		document.getElementById('main-content').innerHTML = '';
		// Reseteamos el menu
		this.resetControlMenu();
		document.getElementById('second').style.transform = 'translateX(-100%)';
		document.getElementById('second').style.webkitTransform = 'translate(-100%)';	
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
	newDistribucionFrecuencia()
	{
		let table = this.table.distribucionFrecuencia(); // Obtenemos la tabla
		document.getElementById('main-content').innerHTML += table; // Inyectamos
		document.getElementById('11').focus();
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
		}
	}
}
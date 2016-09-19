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
	newDatoNoAgrupado()
	{
		let table = this.table.datoNoAgrupado(); // Obtenemos la tabla
		document.getElementById('main-content').innerHTML += table; // Inyectamos
		document.getElementById('11').focus();
	}
	// Metodo para resetear el control del router
	// @param id identificador del menu
	resetControlMenu(id)
	{
		for(let i = 1; i < 9; i++){
			if(i !== id) this.controlBlock[i] = 0;
			else this.controlBlock[i] = 1;
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
					this.resetControlMenu(id); // Actualizamos el control
					document.getElementById('second').style.transform = 'translateX(0)';
					document.getElementById('second').style.webkitTransform = 'translate(0)';
					this.build.menuOne(); // Creamos el menu del bloque uno
				}
				break;
		}
	}
	// Método para subrouter del menu principal
	// @param idMenu identificador del menu
	// @param idSubmenu identificador del submenu
	subRouter(idMenu, idSubmenu)
	{
		// Verificamos el menu
		switch(idMenu){
			case 1:
				// Verificamos el submenu
				switch(idSubmenu){
					case 1:
						this.build.blockOneOne();
						break;
				}
				break;
		}
	}
}
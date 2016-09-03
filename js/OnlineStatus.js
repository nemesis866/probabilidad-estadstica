/*****************************************************
Clase para detectar la conexión a internet
*****************************************************/

class OnlineStatus
{
	constructor()
	{
		// Mostramos el estado de la conexion
		this.changueStatus();
		// Ponemos en escucha de cambios
		this.status();
	}

	// Verificamos el status de la conexion a internet
	status()
	{
		window.addEventListener('online',  this.changueStatus);
		window.addEventListener('offline',  this.changueStatus);
	}
	changueStatus()
	{
		// Obtenemos el status de la conexión
		let status = navigator.onLine ? 'online' : 'offline';
		// Elemento donde insertar el status
		let elem = document.getElementById('status');
		// Insertamos el status
		elem.innerHTML = status;
	}
}
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
		let status = navigator.onLine ? 'online' : 'offline';
		console.log(status);
	}
}
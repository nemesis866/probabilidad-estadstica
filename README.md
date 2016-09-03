Probabilidad y estadistica
=========================

Proyecto final de probabilidad y estadistica.

# Sobre el proyecto

La programación del libro de probabilidad y estadistica requiere utilizar un sistema para graficos, el cual podemos utilizar facilmente mediante javascript (programación web) a diferencias de lenguajes como C, C++ y java (los utilizados hasta el momento en la carrera) que utilizan GUI siendo este muy complejo de utilizar.

La idea principal es crear una pagina web embebida en una app para escritorio, para esto trabajaremos con el <a href="http://electron.atom.io">framework electron</a> (dasarrollado por <a href="https://github.com">github.com</a>), el cual nos aydara a crear un sistema grafico multiplataforma (windows, linux o mac).

# Entorno de desarrollo

Para instalar el entorno de desarrollo necesitas seguir los siguientes pasos.-

* Tener instalado en tu equipo nodejs, te recomiendo descargar la version LTS desde su <a href="https://nodejs.org/en/">sitio oficial</a>.

* Descargar o clonar este repositorio de github en tu computadora.

* Una ves tengas el repositorio, abre la terminal y ubicate en el directorio principal del proyecto (root) e instala las dependencias necesarias con el siguiente comando.-

```
npm install
```

Cuando termines el proceso de instalación, ya puedes empezar a trabajar en el proyecto.

# Iniciar la aplicación de prueba

La aplicación se tendra que ejecutar en modo developer (desarrollo) hasta que sea empaquetada para su distribución, para ejecutarla en la terminal ingresa el siguiente comando.-

```
npm start
```

# Conocimientos necesarios

Al ser una aplicación hibrida para escritorio, es necesario tener conocimientos basicos en las siguientes areas.-

* Javascript.
* HTML y CSS.
* <a href="https://github.com/electron/electron/tree/master/docs-translations/es">Framework electron</a>.

# Documentación

* <a href="https://github.com/nemesis866/probabilidad-estadstica/docs/dataBase.MD">Base de datos</a>.

# Compilación de la aplicación

Para poder compilar la aplicación debemos tener instalada la dependencia electron-packager de forma global (normalmente se instala junto con las dependencias del proyecto), en caso de no tenerla, puedes instalarla con el siguiente comando.-

```
npm i -g electron-packager
```

Para empezar a crear el paquete de distribución de la aplicación, abrimos la terminal y nos ubicamos en el directorio principal del proyecto y ejecutamos el siguiente comando con sus opciones.-

```
electron-packager . --platform=darwin --arch=x64 --version=1.3.4 --ignores=node_modules/electron-* MyApp
```

Opciones para la compilación.-

* Directorio.- Indicamos el directorio principal de nuestro proyecto, lo indicamos con un punto (.).
* --platform.- Indicamos la plataforma con la que trabajamos, or defecto es darwin.
* --arch.- Indicamos la arquitectura de nuestra aplicación.-
	* ia32.- Para arquitecturas de 32 bits.
	* x64.- Para arquitecturas de 64 bits.
* --version.- Indicamos la version de electron con la que estamos trabajando.
* --ignores.- Indicamos los archivos (paquetes) que seran ignorados durante la compilación.

# Integrantes del equipo

* Andrade González Paulo César
* Garcia Quijas Juan Pablo
* Lazo Godinez Maria Ines
* Sanchez Gutierrez Alejandra Amaranta
* Zavala Ortega David
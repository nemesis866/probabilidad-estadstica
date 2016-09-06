Documentación sobre la clase ChartJs
====================================

En este archivo encontrara la documentación necesaria para poder crear las graficas para la aplicación.

# Como inicializar una conexión a la base de datos.

El constructor de la clase se encarga de inicializar la configuración predeterminada para la creación de graficas, no necesita ningun parametro.

```js
// Creamos una instancia de la clase
let chart = new ChartJs();
```

# Métodos disponibles en la base de datos.

A continuación encontrara una descripción rapida de los métodos de la clase.-

* createBar() - Crea una gráfica de barras verticales.
* createDoughnut() - Crea una gráfica tipo dona.
* createHorizontalBar() - Crea una gráfica de barras horizontales
* createLine() - Crea una gráfica de lineas y puntos.
* createPie() - Crea una gráfica de tipo pie (circular).

# Detalles de los métodos disponibles

## createBar(id, label, labels, data, borderSize, opacity)

Nos crea una grafica de barras verticales, recibe 6 parametros.-

* id [requerido] - Identificador del lienzo donde se dibujara la grafica.
* label [requerido] - Etiqueta (titulo) para la grafica.
* lebels [requerido] - Objeto con las etiquetas para cada una de las columnas.
* data [requerido] - Objeto con los datos para cada columna.
* borderSize [opcional] - Grosor del borde, el valor por defecto es 1.
* opacity [opcional] - Opacidad para las columnas de la grafica, el valor por defecto es 9 [1 - 10].

## createDoughnut(id, labels, data, opacity)

* id [requerido] - Identificador del lienzo donde se dibujara la grafica.
* lebels [requerido] - Objeto con las etiquetas para cada una de las columnas.
* data [requerido] - Objeto con los datos para cada columna.
* opacity [opcional] - Opacidad para las columnas de la grafica, el valor por defecto es 7 [1 - 10].

## createHorizontalBar(id, label, labels, data, borderSize, opacity)

* id [requerido] - Identificador del lienzo donde se dibujara la grafica.
* label [requerido] - Etiqueta (titulo) para la grafica.
* lebels [requerido] - Objeto con las etiquetas para cada una de las columnas.
* data [requerido] - Objeto con los datos para cada columna.
* borderSize [opcional] - Grosor del borde, el valor por defecto es 1.
* opacity [opcional] - Opacidad para las columnas de la grafica, el valor por defecto es 7 [1 - 10].

## createLine(id, label, labels, data)

* id [requerido] - Identificador del lienzo donde se dibujara la grafica.
* label [requerido] - Etiqueta (titulo) para la grafica.
* lebels [requerido] - Objeto con las etiquetas para cada una de las columnas.
* data [requerido] - Objeto con los datos para cada columna.

## createPie(id, labels, data, opacity)

* id [requerido] - Identificador del lienzo donde se dibujara la grafica.
* lebels [requerido] - Objeto con las etiquetas para cada una de las columnas.
* data [requerido] - Objeto con los datos para cada columna.
* opacity [opcional] - Opacidad para las columnas de la grafica, el valor por defecto es 7 [1 - 10].
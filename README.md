# Sistema Biblioteca

Aplicación web para consultar el catálogo de una biblioteca y solicitar libros en préstamo. Está hecha con React y Tailwind CSS.

Como es una biblioteca, los libros no se compran: se **solicitan**. Cada libro se añade a una cesta y al final se confirma la solicitud, sin ningún costo.

## Funcionalidades

- **Libros destacados:** carrusel con flechas y puntos indicadores para recorrer los libros seleccionados.
- **Catálogo:** cuadrícula responsive con las portadas, el autor, el género y el año de cada libro.
- **Filtro por categorías:** cada categoría funciona como una palabra clave, así que "Ciencia Ficción" también muestra "Ciencia ficción gótica" y "Distopía" también muestra "Ficción distópica".
- **Buscador:** filtra en vivo por título o autor, y se combina con la categoría seleccionada.
- **Cesta de solicitudes:** ventana desplegable bajo el icono de la cesta, con contador, opción de quitar libros y botón para confirmar. Se cierra al hacer clic fuera o con la tecla Escape.
- **Estado de cada libro:** los botones cambian a "En tu cesta ✓" cuando el libro ya fue solicitado, para evitar duplicados.

## Tecnologías

- [React]
- [Tailwind CSS]
- [Vite]


## Cómo funciona

El estado compartido (`busqueda` y `cesta`) vive en `App`. Los componentes hijos reciben datos y funciones por props:

- Los datos bajan: `busqueda`, `idsEnCesta`, `libro`.
- Los eventos suben: `onSolicitar`, `onQuitar`, `onConfirmar`, `setBusqueda`.

Para agregar un libro al catálogo, basta con añadir un objeto a `src/assets/libros.json`:

```json
{
  "id": 31,
  "titulo": "Título del libro",
  "autor": "Nombre del autor",
  "anio": 2020,
  "genero": "Fantasía",
  "paginas": 300,
  "portada": "https://...",
  "sinopsis": "Descripción opcional."
}
```


## Despliegue
Utilizando Vercel.app

## Autor

Proyecto desarrollado por Nicolás [Horrorstate].

import { useState } from "react";
import libros from "../assets/Libros.json";

import LibroDestacado from "./libroDestacado";
import Categorias, { categorias } from "./categorias";
import TarjetaLibro from "./libroTarjeta";
import Footer from "./footer";

// Ids de los libros para destacar (en este orden)
const idsDestacados = [1, 3, 5, 20, 25];

// BUSQUEDA
// recorre la lista para encontrar el id del libro destacado, si no lo encuentra, devuelve un undefined
const librosDestacados = idsDestacados
  .map((id) => libros.find((l) => l.id === id))
  .filter(Boolean);
// props para utilziar
function ListaLibros({ busqueda = "", onSolicitar, idsEnCesta = [] }) {
  // por defecto la categoria es la de todos
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  // recorre los libros con .filter, y toma solo los que se necesitan
  const librosFiltrados = libros.filter((libro) => {
    // busca en el arreglo de categorias el objeto que coincida con el nombre de la categoria activa
    const palabras =
      categorias.find((c) => c.nombre === categoriaActiva)?.palabras ?? [];
    const genero = libro.genero.toLowerCase();
    // sin palabras "clave", entonces todo. Si encuentra alguna con .some, devuelve un valor
    const coincideCategoria =
      palabras.length === 0 || palabras.some((p) => genero.includes(p));

    const texto = busqueda.trim().toLowerCase();
    const coincideBusqueda =
      texto === "" ||
      libro.titulo.toLowerCase().includes(texto) ||
      libro.autor.toLowerCase().includes(texto);
    // SOLO RETORNA SI SE CUMPLEN AMBAS CONDICIONES, SI CATEGORIA = BUSQUEDA, MUESTRA EL LIBRO (cuando hay una categoria seleccionada)
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="px-8 pb-16 w-full flex-1 flex flex-col gap-10">
        <LibroDestacado
          libros={librosDestacados}
          onSolicitar={onSolicitar}
          idsEnCesta={idsEnCesta}
        />

        <div className="w-full flex gap-8 items-start">
          <Categorias
            categoriaActiva={categoriaActiva}
            setCategoriaActiva={setCategoriaActiva}
          />

          <main className="flex-1">
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Catálogo de Libros
              </h2>
              <span className="text-sm text-gray-500">
                {librosFiltrados.length} resultados
              </span>
            </div>

            {librosFiltrados.length === 0 ? (
              <p className="text-gray-500">
                No hay libros que coincidan con tu selección.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {librosFiltrados.map((libro) => (
                  <TarjetaLibro
                    key={libro.id}
                    libro={libro}
                    onSolicitar={onSolicitar}
                    enCesta={idsEnCesta.includes(libro.id)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ListaLibros;

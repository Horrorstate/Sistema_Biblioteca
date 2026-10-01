import { useState } from "react";
// props: libros de listaLibros, onSolicitar de app e idscesta para q no falle si no hay un valor
function LibroDestacado({ libros, onSolicitar, idsEnCesta = [] }) {
  const [indice, setIndice] = useState(0);
  // si no llega la lista de los libros o esta vacia devuelve null
  if (!libros || libros.length === 0) return null;

  //   lo de la cesta es para determinar si el libro destacado (por id) ya esta en la cesta
  const libro = libros[indice];
  const enCesta = idsEnCesta.includes(libro.id);

  // funcion para las flechas
  // usa el resto para que de vuelta en los extermos
  const anterior = () =>
    setIndice((i) => (i - 1 + libros.length) % libros.length);
  const siguiente = () => setIndice((i) => (i + 1) % libros.length);

  return (
    <section className="w-full px-4 md:px-8">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
        Libros destacados
      </h2>

      <div className="relative">
        {/* Flecha izquierda */}
        {/* solo se llama si hay mas de 1 libro destacado */}
        {libros.length > 1 && (
          <button
            onClick={anterior}
            aria-label="Libro anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-blue-400 text-slate-900 shadow-lg flex items-center justify-center cursor-pointer transition-colors"
          >
            <img src="./flechaizq.png" alt="" className="w-5 h-5" />
          </button>
        )}

        {/* Flecha derecha */}
        {/* lo mismo, solo aparece si hay mas de un lirbo */}
        {libros.length > 1 && (
          <button
            onClick={siguiente}
            aria-label="Libro siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-blue-400 text-slate-900 shadow-lg flex items-center justify-center cursor-pointer transition-colors"
          >
            <img src="./flechader.png" alt="" className="w-5 h-5" />
          </button>
        )}

        {/* ventana destacados */}
        <div className="w-full bg-slate-900 text-white rounded-2xl p-6 md:p-8 md:px-16 shadow-xl flex flex-col md:flex-row gap-8 items-center border border-slate-800">
          {/* Tarjeta del libro */}
          <div className="w-48 sm:w-56 md:w-64 aspect-2/3 shrink-0 rounded-xl overflow-hidden shadow-2xl border-2 border-slate-700/50">
            <img
              // se llama del json
              src={libro.portada}
              alt={libro.titulo}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Genero, titulo, sinopsis y año del libro en pag principal*/}
          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-sky-200 text-amber-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  {libro.genero}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {libro.anio}
                </span>
              </div>

              <h1 className="md:text-4xl font-black text-white mb-2">
                {libro.titulo}
              </h1>
              <p className="text-white text-base md:text-lg font-medium mb-6">
                {libro.autor}
              </p>

              <div className="bg-slate-800/80 border-l-4 border-white p-4 rounded-r-xl mb-6">
                <h3 className="text-xs font-bold tracking-wider text-slate-400 mb-1">
                  SINOPSIS
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {/* No le puse a todos los libros sinopsis, tonces por eso esto está acá */}
                  {libro.sinopsis ?? "Sinopsis no disponible."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                //   se llama a la funcion dese app
                onClick={() => onSolicitar(libro)}
                // el boton de solicitar esta desabilitado si ya esta en la cesta
                disabled={enCesta}
                className={`font-bold px-6 py-2.5 rounded-xl transition-colors text-sm ${
                  enCesta
                    ? "bg-slate-700 text-slate-300 cursor-default"
                    : "bg-sky-200 hover:bg-blue-900 text-blue-950 cursor-pointer"
                }`}
              >
                {/* condicion si esta o no en cesta */}
                {enCesta ? "¡Agregado a tu cesta!" : "Solicitar"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Puntos de abajo */}
      {libros.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {libros.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setIndice(i)}
              aria-label={`Ir a ${l.titulo}`}
              className={`h-2.5 rounded-full cursor-pointer transition-all ${
                i === indice
                  ? "w-6 bg-blue-700 "
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default LibroDestacado;

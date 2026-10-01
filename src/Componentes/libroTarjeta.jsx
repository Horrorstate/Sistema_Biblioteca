// onsolicitar viene de app, para agregar a la cesta, ademas, cesta = false es un valor por defecto
function TarjetaLibro({ libro, onSolicitar, enCesta = false }) {
  return (
    // tamaño de las imagenes y bordes
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      <div className="w-full aspect-2/3 bg-gray-100 overflow-hidden relative">
        <img
          src={libro.portada}
          alt={libro.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* parte del abajo de la tarjeta (titulo y todo eso) */}
      <div className="p-3 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* line clamp sirve para limitar palabras y leading-snug reduce el interlineado */}
          <h3 className="font-bold text-m text-gray-900 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
            {libro.titulo}
          </h3>
          <p className="text-15px text-gray-500 mt-1 line-clamp-1">
            {libro.autor}
          </p>
        </div>

        <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-12px text-gray-500">
          <span
            // agregue el title para q se pueda ver el genero del libro cuando es muy largo
            title={libro.genero}
            className="font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md truncate max-w-80px"
          >
            {libro.genero}
          </span>
          <span className="font-semibold text-gray-400">{libro.anio}</span>
        </div>

        <button
          onClick={() => onSolicitar(libro)}
          disabled={enCesta}
          className={`mt-3 w-full text-xs font-bold py-2 rounded-lg transition-colors ${
            enCesta
              ? "bg-gray-200 text-gray-500 cursor-default"
              : "bg-blue-700 hover:bg-blue-800 text-white cursor-pointer"
          }`}
        >
          {enCesta ? "¡Agregado a tu cesta!" : "Solicitar"}
        </button>
      </div>
    </div>
  );
}

export default TarjetaLibro;

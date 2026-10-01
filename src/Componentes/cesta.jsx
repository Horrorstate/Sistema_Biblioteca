import { useEffect, useRef, useState } from "react";
// valor inicial cesta: cerrada y no enviada
function Cesta({ cesta, onQuitar, onConfirmar }) {
  const [abierta, setAbierta] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const contenedorRef = useRef(null);

  // Cerrar al hacer clic fuera o con Escape
  useEffect(() => {
    if (!abierta) return;

    function alHacerClic(e) {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target)) {
        setAbierta(false);
        setEnviado(false);
      }
    }

    function alPulsarTecla(e) {
      if (e.key === "Escape") {
        setAbierta(false);
        setEnviado(false);
      }
    }

    document.addEventListener("mousedown", alHacerClic);
    document.addEventListener("keydown", alPulsarTecla);

    return () => {
      document.removeEventListener("mousedown", alHacerClic);
      document.removeEventListener("keydown", alPulsarTecla);
    };
  }, [abierta]);

  // cambia los estados de cerrado y no enviado (los iniciales)
  function alternar() {
    setAbierta((a) => !a);
    setEnviado(false);
  }

  function confirmar() {
    onConfirmar();
    setEnviado(true);
  }

  return (
    <div ref={contenedorRef} className="relative">
      {/* alterna la ventana */}
      <button
        onClick={alternar}
        aria-label="Cesta"
        aria-expanded={abierta}
        // Colores para cuando la cesta esté abierta o cerrada
        className={`relative p-3 rounded-xl shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-md ${
          abierta
            ? "bg-gray-300 ring-2 ring-white"
            : "bg-amber-400 hover:bg-gray-300"
        } text-amber-950`}
      >
        <img src="./cesta.png" alt="cesta" className="w-9 h-9" />

        {/* Numero de articulos q hay en la cesta (si hay al menos 1) */}
        {cesta.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shadow ring-2 ring-blue-950">
            {cesta.length}
          </span>
        )}
      </button>
      {/* ventana de la cesta */}
      {abierta && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-200 z-30">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-black text-lg tracking-tight">Tu solicitud</h3>
            <p className="text-xs text-gray-500">Préstamo de libros.</p>
          </div>

          {cesta.length === 0 && enviado && (
            <p className="px-4 py-6 text-sm text-green-800 font-semibold text-center">
              ¡Solicitud enviada! Ya puedes retirar tus libros.
            </p>
          )}

          {cesta.length === 0 && !enviado && (
            <p className="px-4 py-6 text-sm text-gray-500 text-center">
              Tu cesta está vacía. Pulsa <strong>Solicitar</strong> en un libro
              para añadirlo.
            </p>
          )}
          {/* Lista de la cesta en la ventana */}
          {cesta.length > 0 && (
            <>
              <ul className="max-h-72 overflow-y-auto divide-y divide-gray-100">
                {cesta.map((libro) => (
                  <li
                    key={libro.id}
                    className="flex items-center gap-3 px-4 py-3"
                  >
                    <img
                      src={libro.portada}
                      alt={libro.titulo}
                      className="w-10 h-14 object-cover rounded shrink-0 bg-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold leading-snug line-clamp-2">
                        {libro.titulo}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {libro.autor}
                      </p>
                    </div>
                    {/* sacar libros */}
                    <button
                      onClick={() => onQuitar(libro.id)}
                      aria-label={`Quitar ${libro.titulo}`}
                      className="shrink-0 w-7 h-7 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-700 transition-colors cursor-pointer text-lg leading-none"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>

              <div className="p-4 border-t border-gray-100">
                <button
                  onClick={confirmar}
                  className="w-full bg-sky-300 hover:bg-sky-200 text-amber-950 font-bold py-2.5 rounded-xl transition-colors cursor-pointer text-sm"
                >
                  Confirmar solicitud ({cesta.length})
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Cesta;

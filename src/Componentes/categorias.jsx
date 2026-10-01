// filtrar con las "distintas" posibilidades de los generos
export const categorias = [
  { nombre: "Todos", palabras: [] },
  { nombre: "Clásicos", palabras: ["clásic"] },
  { nombre: "Ciencia Ficción", palabras: ["ciencia ficción"] },
  { nombre: "Cuentos", palabras: ["cuentos"] },
  { nombre: "Distopía", palabras: ["distopía", "distópic"] },
  { nombre: "Fantasía", palabras: ["fantasía"] },
  { nombre: "Filosofía", palabras: ["filosof", "filosóf"] },
  { nombre: "Misterio", palabras: ["misterio"] },
  { nombre: "Psicológicos", palabras: ["psicológica"] },
  { nombre: "Romance", palabras: ["romance", "romántic"] },
  { nombre: "Terror", palabras: ["terror"] },
];

function Categorias({ categoriaActiva, setCategoriaActiva }) {
  return (
    <aside className="w-64 shrink-0">
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs flex flex-col justify-between h-fit">
        <div>
          <span className="text-2xl font-black text-gray-900 tracking-tight mb-6 block border-b border-gray-100 pb-3">
            Categorías
          </span>
          <div className="flex flex-col gap-2">
            {categorias.map(({ nombre }) => (
              <button
                key={nombre}
                // Click = Renderizar otra vez con el catalogo filtrado
                onClick={() => setCategoriaActiva(nombre)}
                // el truncate mezcla 3 propiedades del tailwind; overflow, text-overflow y wwhite-space
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer truncate ${
                  // si la categoria es igual al nombre, el nombre de la categoria cambia de color y se "selecciona"
                  categoriaActiva === nombre
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-sky-200 hover:text-black"
                }`}
              >
                {/* nombre de las categorias */}
                {nombre}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Categorias;

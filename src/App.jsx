import { useState } from "react";
import "./App.css";

import TaskInput from "./Componentes/taskInput";
import ListaLibros from "./Componentes/listaLibros";
import Cesta from "./Componentes/cesta";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [cesta, setCesta] = useState([]);

  // Añade el libro a la cesta (si no estaba ya)
  function solicitarLibro(libro) {
    setCesta((actual) =>
      actual.some((l) => l.id === libro.id) ? actual : [...actual, libro],
    );
  }

  function quitarLibro(id) {
    setCesta((actual) => actual.filter((l) => l.id !== id));
  }

  function confirmarSolicitud() {
    setCesta([]);
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Parte de arriba */}
      <header className="relative w-full h-35 bg-blue-950 px-8 flex items-center justify-between shadow-md z-20">
        <h1 className="text-5xl font-black text-white">Sistema Biblioteca</h1>

        {/* Buscador de libros */}
        <TaskInput busqueda={busqueda} setBusqueda={setBusqueda} />

        {/* Cesta */}
        <div className="flex items-center gap-4">
          <Cesta
            cesta={cesta}
            onQuitar={quitarLibro}
            onConfirmar={confirmarSolicitud}
          />
        </div>
      </header>

      {/* Espacio entre destacados y el top */}
      <main className=" pt-10">
        <ListaLibros
          busqueda={busqueda}
          onSolicitar={solicitarLibro}
          idsEnCesta={cesta.map((l) => l.id)}
        />
      </main>
    </div>
  );
}

export default App;

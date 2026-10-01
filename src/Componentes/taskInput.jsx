function TaskInput({ busqueda, setBusqueda }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center w-96 md:w-40rem">
      <button
        type="submit"
        // el border da problemas con la lupa
        className="shrink-0 w-15 aspect-square overflow-hidden cursor-pointer "
      >
        <img
          className="w-full h-full border rounded-l-2xl object-cover scale-100 transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-md"
          src="https://th.bing.com/th/id/OIP.1OWWX1LiNv4kH_MXy3YYfgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
        />
      </button>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="¡Busca tu libro!"
        className="w-full px-5 py-4 bg-white text-gray-800 border border-amber-950/2 rounded-r-3xl shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-400 text-m placeholder-gray-400"
      />
    </div>
  );
}

export default TaskInput;

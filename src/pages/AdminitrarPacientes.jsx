import { useState } from "react";
import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";

const AdminitrarPacientes = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-green-50 p-4 md:p-8">
      <button
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 text-green-800 font-extrabold uppercase mx-auto p-3 rounded-xl mb-6 md:hidden transition-all duration-300 shadow-md active:shadow-inner transform hover:scale-105"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "Ocultar Formulario" : "Agregar Nuevo Paciente"}
      </button>

      <div
        className={`${
          mostrarFormulario ? "block" : "hidden"
        } md:block md:w-1/2 lg:w-2/5 p-4 md:p-6 transition-all duration-500`}
      >
        {/* Contenedor del Formulario (Tarjeta) */}
        <div className="bg-white rounded-xl shadow-2xl p-6 border-t-4 border-green-600">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Registro de <span className="text-gray-800">Citas</span>
          </h2>
          <Formulario />
        </div>
      </div>

      <div className="md:w-1/2 lg:w-3/5 p-4 md:p-6">
        {/* Contenedor del Listado (Tarjeta) */}
        <div className="bg-white rounded-xl shadow-2xl p-6 border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            <span className="text-gray-800">Listado de</span> Pacientes
          </h2>
          <ListadoPacientes />
        </div>
      </div>
    </div>
  );
};

export default AdminitrarPacientes;

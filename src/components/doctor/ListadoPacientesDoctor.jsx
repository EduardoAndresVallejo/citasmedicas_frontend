import useDoctor from "../../hooks/useDoctor.jsx";
import PacienteDoctor from "./PacienteDoctor.jsx";

const ListadoPacientesDoctor = () => {
  const { pacientes } = useDoctor();
  
  return (
    <div>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-green-700">
            Listado de <span className="text-gray-800">Pacientes</span>
          </h2>

          <p className="text-xl mt-3 mb-8 text-center text-gray-600">
            Administra tus{" "}
            <span className="text-yellow-500 font-bold">Pacientes y Citas</span>
          </p>
          
          <div className="space-y-6">
            {pacientes.map((paciente) => (
              <PacienteDoctor key={paciente.id} paciente={paciente} />
            ))}
          </div>
        </>
      ) : (
        <div className="p-8 text-center bg-green-50 rounded-xl border border-dashed border-green-300">
          <h2 className="font-black text-3xl text-green-700">
            Aún No Hay Pacientes
          </h2>

          <p className="text-xl mt-4 text-gray-600">
            Comienza agregando pacientes y{" "}
            <span className="text-yellow-500 font-bold">aparecerán aquí</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ListadoPacientesDoctor;

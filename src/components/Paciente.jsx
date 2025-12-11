import usePacientes from "../hooks/usePacientes"

const Paciente = ({paciente}) => {

    const { setEdicion,eliminarPaciente } = usePacientes()

    const {email, fecha_cita, nombre, sintomas, id, dnidoctor } = paciente
    
    console.log(paciente)

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(nuevaFecha)
    }

    return (
       <div className="mx-auto my-6 bg-white shadow-xl p-6 rounded-xl border-l-4 border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
    <div className="space-y-2">
        <p className="font-bold text-green-700">Nombre: 
            <span className="font-semibold normal-case text-gray-800 ml-1"> {nombre}</span>
        </p>

        <p className="font-bold text-green-700">Email: 
            <span className="font-semibold normal-case text-gray-800 ml-1"> {email}</span>
        </p>

        <p className="font-bold text-green-700">Fecha de la Cita: 
            <span className="font-semibold normal-case text-gray-800 ml-1"> {formatearFecha(fecha_cita)}</span>
        </p>

         <p className="font-bold text-green-700">Nombre Doctor:
            <span className="font-semibold normal-case text-gray-800 ml-1">{dnidoctor} </span>
        </p>        

        <p className="font-bold text-green-700 pt-2">Síntomas: 
            <span className="font-normal normal-case text-gray-600 block mt-1 leading-relaxed"> {sintomas}</span>
        </p>
    </div>

    <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
        <button
            type="button"
            className="py-2 px-6 bg-green-600 hover:bg-green-700 text-white uppercase font-bold rounded-full transition-all duration-300 shadow-md transform hover:scale-105"
            onClick={() => setEdicion(paciente)}
        >Editar</button>

        <button
            type="button"
            className="py-2 px-6 bg-yellow-500 hover:bg-yellow-600 text-red-800 uppercase font-bold rounded-full transition-all duration-300 shadow-md transform hover:scale-105"
            onClick={() => eliminarPaciente(id)}
        >Eliminar</button>
    </div>
</div>
    );
}

export default Paciente;

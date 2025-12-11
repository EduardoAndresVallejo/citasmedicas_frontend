const PacienteDoctor = ({ paciente }) => {
  const { email, fecha_cita, nombre, sintomas, dnidoctor } = paciente;

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };

  return (
    <div className="mx-auto my-6 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-500 hover:shadow-3xl hover:border-l-8 border-l-4 border-yellow-500 transform hover:scale-[1.01] cursor-pointer">
      {/* Encabezado de la Tarjeta con Ícono de Cita */}
      <div className="flex items-start justify-between border-b pb-3 mb-3">
        <div className="flex items-center">
          {/* Icono de Cita (Calendario) */}
          <svg
            className="h-7 w-7 text-green-700 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <h3 className="text-xl font-black text-green-800">Cita Programada</h3>
        </div>

        {/* Fecha Principal Destacada */}
        <p className="text-sm font-extrabold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full shadow-sm">
          {formatearFecha(fecha_cita)}
        </p>
      </div>

      {/* Cuerpo de la Información con Íconos */}
      <div className="space-y-3">
        {/* Nombre del Paciente */}
        <div className="flex items-center text-gray-800">
          <svg
            className="h-5 w-5 text-green-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.534 0 4.865.748 6.879 1.804M16 12a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8-1.79-8-4s3.582-4 8-4 8 1.79 8 4-3.582 4-8 4z"
            ></path>
          </svg>
          <p className="font-semibold">
            Paciente:
            <span className="font-medium text-gray-700 ml-1"> {nombre}</span>
          </p>
        </div>

        {/* Doctor Asignado */}
        <div className="flex items-center text-gray-800">
          <svg
            className="h-5 w-5 text-green-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14v5m-1.5-2H8.25m7.5 0h-1.5M12 4.5v3m-7.5 3h15M12 18v3m0-18h7a2 2 0 012 2v12a2 2 0 01-2 2h-7M5 18a2 2 0 01-2-2V5a2 2 0 012-2h7"
            ></path>
          </svg>
          <p className="font-semibold">
            Dni Doctor:
            <span className="font-medium text-gray-700 ml-1">
              {dnidoctor}
            </span>
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center text-gray-800">
          <svg
            className="h-5 w-5 text-green-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8m-18 4h18"
            ></path>
          </svg>
          <p className="font-semibold">
            Contacto:
            <span className="font-medium text-gray-700 ml-1"> {email}</span>
          </p>
        </div>

        {/* Síntomas (Detalle expandido) */}
        <div className="pt-3 border-t">
          <p className="font-bold text-green-700 flex items-center mb-1">
            <svg
              className="h-5 w-5 text-yellow-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>
            Motivo de Consulta:
          </p>
          <span className="font-normal text-sm text-gray-600 leading-relaxed block bg-gray-50 p-3 rounded-lg border border-gray-100">
            {sintomas}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PacienteDoctor;

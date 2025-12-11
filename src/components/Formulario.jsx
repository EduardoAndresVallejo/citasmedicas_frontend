import { useState, useEffect } from "react";
import Alertas from "./Alerta";
import usePacientes from "../hooks/usePacientes";
import clienteAxios from "../../config/axios";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fecha_cita, setFecha_cita] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [id, setId] = useState(null);
  const [doctores, setDoctores] = useState([]);
  const [doctordni, setDoctorDni] = useState("");

  const [alerta, setAlerta] = useState({});

  const { guardarPaciente, paciente } = usePacientes();

  useEffect(() => {
    if (paciente?.nombre) {
      setNombre(paciente.nombre);
      setEmail(paciente.email);
      setFecha_cita(paciente.fecha_cita);
      setSintomas(paciente.sintomas);
      setId(paciente.id);
      setDoctorDni(paciente.doctor);
    }
  }, [paciente]);

  useEffect(() => {
    const cargarDoctores = async () => {
      try {
        const { data } = await clienteAxios.get("/pacientes/doctor");
        setDoctores(data);
      } catch (error) {
        console.log(error);
      }
    };

    cargarDoctores();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email, fecha_cita, sintomas, doctordni].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    guardarPaciente({
      nombre,
      email,
      fecha_cita,
      sintomas,
      id,
      dnidoctor: doctordni,
    });

    setAlerta({
      msg: "Guardado Correctamente",
    });

    setNombre("");
    setEmail("");
    setFecha_cita("");
    setSintomas("");
    setDoctorDni("");
  };
  const { msg } = alerta;
  return (
    <>
      <div className="bg-white rounded-xl shadow-2xl p-6 border-t-4 border-green-600">
        <h2 className="font-black text-3xl text-center text-green-700">
          Administrador de Citas
        </h2>

        <p className="text-xl mt-3 mb-8 text-center text-gray-600">
          Añade tus <span className="text-yellow-500 font-bold">Pacientes</span>{" "}
          y Administralos
        </p>

        {msg && <Alertas alerta={alerta} />}

        <form className="py-6 px-3" onSubmit={handleSubmit}>
          <div className="mb-5 relative">
            <label
              htmlFor="paciente"
              className="text-sm text-gray-700 font-semibold block mb-2"
            >
              Nombre del Paciente
            </label>
            <input
              id="paciente"
              type="text"
              placeholder="Nombre completo del Paciente"
              className="border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent w-full p-2 placeholder-gray-400 focus:outline-none transition duration-200"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="email"
              className="text-sm text-gray-700 font-semibold block mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="ejemplo@correo.com"
              className="border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent w-full p-2 placeholder-gray-400 focus:outline-none transition duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="fecha_cita"
              className="text-sm text-gray-700 font-semibold block mb-2"
            >
              Fecha de la Cita
            </label>
            <input
              id="fecha_cita"
              type="date"
              className="border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent w-full p-2 text-gray-600 focus:outline-none transition duration-200"
              value={fecha_cita}
              onChange={(e) => setFecha_cita(e.target.value)}
            />
          </div>
          <select
            className="border-b-2 border-gray-300 w-full p-2 focus:border-green-500"
            value={doctordni}
            onChange={(e) => setDoctorDni(e.target.value)}
          >
            <option value="">-- Selecciona un doctor --</option>
            {doctores.map((doctorItem) => (
              <option key={doctorItem.id} value={doctorItem.dnidoctor}>
                {doctorItem.nombre}
              </option>
            ))}
          </select>

          <div className="mb-8 relative">
            <label
              htmlFor="sintomas"
              className="text-sm text-gray-700 font-semibold block mb-2"
            >
              Síntomas / Motivo de la Cita
            </label>
            <textarea
              id="sintomas"
              placeholder="Describe brevemente los síntomas o el motivo de la consulta"
              rows="4"
              className="border-2 border-gray-300 focus:border-green-500 w-full p-3 mt-2 placeholder-gray-400 rounded-lg resize-none focus:ring-1 focus:ring-green-500 transition duration-200"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-green-600 w-full p-3 text-white uppercase font-bold rounded-xl shadow-lg hover:bg-green-700 active:shadow-inner cursor-pointer transition-all duration-300 transform hover:scale-[1.01]"
            value={id ? "Guardar Cambios" : "Agregar Paciente"}
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;

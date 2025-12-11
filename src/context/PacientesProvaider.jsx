import { createContext, useState, useEffect } from "react";
import clienteAxios from "../../config/axios";
import useAuth from "../hooks/useAuth";

const PacientesContext = createContext();

export const PacientesProvaider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [doctores, setDoctores] = useState({});
  const { auth } = useAuth();

  useEffect(() => {
    const obtenerPacientes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/pacientes", config);
        setPacientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPacientes();
  }, [auth]);

  const guardarPaciente = async (paciente) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (paciente.id) {
      try {
        const { data } = await clienteAxios.put(
          `/pacientes/${paciente.id}`,
          paciente,
          config
        );

        const pacientesActualizado = pacientes.map((pacienteState) =>
          pacienteState.id === data.id ? data : pacienteState
        );
        setPacientes(pacientesActualizado);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await clienteAxios.post(
          "/pacientes",
          paciente,
          config
        );

        const { ...pacienteAlmacenado } = data;
        setPacientes([pacienteAlmacenado, ...pacientes]); // ✔ CORRECTO
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  };
  const setEdicion = (paciente) => {
    setPaciente(paciente);
  };

  useEffect(() => {
    const doctoresDisponibles = async () => {
      try {
        const { data } = await clienteAxios("/pacientes");
        setDoctores(data);
      } catch (error) {
        console.log(error);
      }
    };
    doctoresDisponibles();
  }, [auth]);

  const eliminarPaciente = async (id) => {
    const confirmar = confirm("Confirma que deseas eliminar?");

    if (confirmar) {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        await clienteAxios.delete(`/pacientes/${id}`, config);

        const pacientesActualizado = pacientes.filter(
          (pacienteState) => pacienteState.id !== id
        );

        setPacientes(pacientesActualizado); // <--- ✔ CORRECTO
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <PacientesContext.Provider
      value={{
        pacientes,
        guardarPaciente,
        setEdicion,
        paciente,
        eliminarPaciente,
        doctores,
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesContext;

import { createContext, useState, useEffect } from "react";
import clienteAxios from "../../config/axios";
import useAuth from "../hooks/useAuth";

const DoctorContext = createContext();

export const DoctorProvaider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
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

        const { data } = await clienteAxios("/doctor", config);
        setPacientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPacientes();
  }, [auth]);

  return (
    <DoctorContext.Provider
      value={{
        pacientes,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;

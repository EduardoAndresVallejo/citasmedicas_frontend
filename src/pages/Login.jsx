import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alertas from "../components/Alerta";
import clienteAxios from "../../config/axios";
import LifeMateLogo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/doctores/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/admin");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 to-yellow-50 animate-gradient-xy">
        <div className="max-w-md w-full relative z-10">
          <div className="text-center">
            {/* Logo Dinámico con Animaciones - Ajustado para ser más pequeño y centrado como en la foto */}
            <div className="">
              <img
                src={LifeMateLogo}
                alt="LifeMate Logo"
                className="mx-auto w-82 transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
            {/* Título y Subtítulo - Ajustado a la tipografía y estilo de la foto */}
            <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
              Inicia Sesión y Administra Paciente
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Tus Pacientes al alcance de tu mano
            </p>
          </div>

          {/* Contenedor del Formulario - Ajustado para menos padding y bordes más redondos */}
          <div className="bg-white shadow-2xl p-6 md:p-8 rounded-xl border border-gray-100">
            {msg && <Alertas alerta={alerta} />}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo Email - Ajustado al estilo de la foto (sin label, input más limpio) */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400 transition duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v4a2 2 0 002 2h14a2 2 0 002-2v-4M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                  ></path>
                </svg>
              </div>

              {/* Campo Contraseña - Ajustado al estilo de la foto */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-400 transition duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>

              {/* Botón de Submit - Ajustado para coincidir con el gradiente de la foto */}
              <input
                type="submit"
                value="Iniciar Sesión"
                className="w-full py-3 px-4 bg-gradient-to-r from-green-700 to-yellow-500 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer mt-6"
              />
            </form>

            {/* Navegación Inferior - Ajustado a la distribución de la foto */}
            <nav className="mt-5 flex justify-center space-x-4 text-center text-sm">
              <Link
                className="text-green-700 font-semibold hover:underline transition-colors duration-200"
                to="/auth/registrar"
              >
                Regístrate
              </Link>
              <Link
                className="text-gray-500 hover:text-green-700 hover:underline transition-colors duration-200"
                to="/auth/olvide_password"
              >
                ¿Olvidé mi Contraseña?
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

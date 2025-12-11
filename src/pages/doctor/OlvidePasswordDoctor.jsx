import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Alertas from "../../components/Alerta";
import clienteAxios from "../../../config/axios";

const OlvidePasswordDoctor = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlerta({ msg: "El Email es obligatorio", error: true });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/doctor/olvide-password", {
        email,
      });
      setAlerta({ msg: data.smg });
      navigate("/doctor/olvide_password/:id");
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
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-100">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-green-600 transform skew-y-[-3deg] origin-top-left"></div>

        <div className="max-w-md w-full relative z-10 p-5">
          <div className="text-center mb-10 mt-10 md:mt-0">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
              Recupera tu <span className="text-yellow-400">Acceso</span>
            </h1>
            <p className="text-lg mt-2 font-medium text-green-400">
              No Pierdas tus Pacientes
            </p>
          </div>

          <div className="bg-white shadow-2xl p-10 rounded-xl border border-gray-200 transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out">
            {msg && <Alertas alerta={alerta} />}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative pt-4">
                <label className="absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email de registro"
                    className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none transition duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <svg
                    className="absolute left-2 bottom-3 h-5 w-5 text-gray-400"
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
              </div>

              <input
                type="submit"
                value="Enviar instrucciones"
                className="w-full py-3 px-4 bg-yellow-500 text-green-800 font-extrabold uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-inner active:bg-yellow-600 cursor-pointer tracking-widest mt-8 transform hover:scale-105"
              />
            </form>

            <nav className="mt-8 flex flex-col sm:flex-row justify-between text-center space-y-3 sm:space-y-0">
              <Link
                className="text-sm text-gray-600 hover:text-green-700 hover:underline transition-colors duration-200 font-medium"
                to="/doctor"
              >
                ¿Ya tienes una cuenta?{" "}
                <span className="font-bold">Inicia Sesión</span>
              </Link>
              <Link
                className="text-sm text-gray-600 hover:text-green-700 hover:underline transition-colors duration-200 font-medium"
                to="/doctor/registrar"
              >
                ¿No tienes una cuenta?{" "}
                <span className="font-bold">Regístrate</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default OlvidePasswordDoctor;

import { useState } from "react";
import clienteAxios from "../../../config/axios";
import Alertas from "../../components/Alerta";
import { useNavigate } from "react-router-dom";

const NuevoPasswordDoctor = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [tokenValido, setTokenValido] = useState(true);
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const validarToken = async (e) => {
    e.preventDefault();
    try {
      const { data } = await clienteAxios.post(
        "/doctor/olvide-password/probartoken",
        { token }
      );
      setAlerta({ msg: data.msg });
      setTokenValido(false);
      setCuentaConfirmada(true);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: "La contrasena es muy corto, agrega minimo 6 caracteres",
        error: true,
      });
      return;
    }
    //crear el usuario en la api

    try {
      const { data } = await clienteAxios.post(
        `/doctor/olvide-password/nuevopassword/${token}`,
        { password }
      );
      setAlerta({ msg: data.msg });
      navigate("/doctor");
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
        {/* Título Principal y Estética */}
        <div className="text-center pt-10 pb-5 md:pt-16 md:pb-10">
          <h1 className="text-5xl md:text-6xl font-black leading-tight drop-shadow-md mx-auto max-w-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-900">
              Reestablece tu
            </span>
            <span className="block mt-2 md:inline-block md:ml-4 text-yellow-600">
              Contraseña
            </span>
            <span className="block mt-2 md:mt-0 text-gray-800 font-extrabold text-4xl md:text-5xl">
              y No Pierdas Acceso a tus Pacientes
            </span>
          </h1>
          <p className="mt-3 text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Utiliza el token enviado a tu correo para crear una nueva clave.
          </p>
        </div>

        {/* Contenedor del Formulario (Tarjeta) */}
        <div className="mt-10 md:mt-10 shadow-2xl p-8 rounded-2xl bg-white border-t-4 border-green-600 max-w-lg mx-auto">
          {/* Alerta de Mensajes */}
          {msg && <Alertas alerta={alerta} />}

          {/* Formulario 1: Validación del Token */}
          {tokenValido && (
            <form onSubmit={validarToken} className="space-y-6">
              <div className="my-5">
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Ingresa tu Token de 6 dígitos
                </label>
                <input
                  type="number"
                  placeholder="064527"
                  className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                  value={token}
                  // Limitar a 6 dígitos
                  onChange={(e) => setToken(e.target.value.slice(0, 6))}
                />
              </div>
              <input
                type="submit"
                value="Validar Token"
                className="bg-green-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 shadow-lg hover:bg-green-700 active:shadow-inner cursor-pointer transition-all duration-300 transform hover:scale-[1.01]"
              />
            </form>
          )}

          {/* Formulario 2: Nueva Contraseña */}
          {cuentaConfirmada && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="my-5">
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  placeholder="Tu Nueva Contraseña"
                  className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Actualizar Contraseña"
                className="bg-yellow-500 w-full py-3 px-10 rounded-xl text-green-900 uppercase font-bold mt-5 shadow-lg hover:bg-yellow-600 active:shadow-inner cursor-pointer transition-all duration-300 transform hover:scale-[1.01]"
              />
            </form>
          )}
        </div>
      </>
  );
};

export default NuevoPasswordDoctor;

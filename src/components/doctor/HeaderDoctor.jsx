import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HeaderDoctor = () => {

    const { cerrarSesion } = useAuth()
    return (
        <header className="py-8  bg-green-700 shadow-xl">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
                {/* Contenedor del Logo y Título */}
                <div className="flex items-center gap-3">
                    <h1 className="font-extrabold text-3xl text-white drop-shadow-md text-center">
                        Administrador de <span className="text-yellow-400">Citas</span>
                    </h1>
                </div>

                {/* Navegación y Botón */}
                <nav className="flex flex-col items-center lg:flex-row px-8 gap-6 mt-5 lg:mt-0">
                    <Link 
                        to="/admin/doctor" 
                        className="text-white text-sm uppercase font-bold hover:text-yellow-400 transition-colors duration-200 tracking-wider"
                    >Pacientes</Link>
                    <button
                        type="button"
                        className="bg-yellow-400 text-green-800 text-sm uppercase font-bold py-2 px-4 rounded-full hover:bg-white transition-all duration-300 shadow-md active:shadow-inner"
                        onClick={cerrarSesion}
                    >Cerrar Sesión</button>
                </nav>
            </div>
        </header>
    );
}

export default HeaderDoctor;

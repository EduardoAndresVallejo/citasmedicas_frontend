import { Link } from "react-router-dom";

const AdminNav = () => {
    return (
       <nav className="flex gap-4 p-3 border-b border-gray-200 pb-2 mb-4">
    <Link
        to="/admin/perfil"
        className="font-bold uppercase text-gray-500 hover:text-green-700 hover:border-b-2 hover:border-green-700 transition duration-200 pb-2 text-sm"
    >Perfil</Link>
    <Link
        to="/admin/cambiar-password"
        className="font-bold uppercase text-gray-500 hover:text-green-700 hover:border-b-2 hover:border-green-700 transition duration-200 pb-2 text-sm"
    >Cambiar Contraseña</Link>
</nav>
    );
}

export default AdminNav;

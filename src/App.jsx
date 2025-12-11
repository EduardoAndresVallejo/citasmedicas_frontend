import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Registrar from "./pages/Registrar.jsx";
import ConfirmarCuenta from "./pages/ConfirmarCuenta.jsx";
import OlvidePassword from "./pages/OlvidePassword.jsx";
import NuevoPassword from "./pages/NuevoPassword.jsx";
import { AuthProvaider } from "./context/AuthProvaider.jsx";
import { PacientesProvaider } from "./context/PacientesProvaider.jsx";
import RutaProtegida from "./layout/RutaProtegida.jsx";
import AdminitrarPacientes from "./pages/AdminitrarPacientes.jsx";
import EditarPerfil from "./pages/EditarPerfil.jsx";
import CambiarPassword from "./pages/CambiarPassword.jsx";

//rutas Doctores
import LoginDoctor from "./pages/doctor/LoginDoctor.jsx";
import RegistrarDoctor from "./pages/doctor/RegistrarDoctor.jsx";
import ConfirmarCuentaDoctor from "./pages/doctor/ConfirmarCuentaDoctor.jsx";
import OlvidePasswordDoctor from "./pages/doctor/OlvidePasswordDoctor.jsx";
import NuevoPasswordDoctor from "./pages/doctor/NuevoPasswordDoctor.jsx";
import AdminitrarDoctor from "./pages/doctor/AdministradorDoctor.jsx";
import { DoctorProvaider } from "./context/DoctorProvaider.jsx";
import PaginaPrincipal from "./pages/PaginaPrincipal.jsx";
import RutaProtegidaDoctor from "./layout/RutaProtegidaDoctor.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvaider>
          <PacientesProvaider>
            <DoctorProvaider>
              {/*Rutas pacientes*/}
              <Routes>
                <Route path="/" element={<PaginaPrincipal />} />
                <Route path="/auth" element={<AuthLayout />}>
                  <Route index element={<Login />} />
                  <Route path="registrar" element={<Registrar />} />
                  <Route path="confirmar" element={<ConfirmarCuenta />} />
                  <Route path="olvide_password" element={<OlvidePassword />} />
                  <Route
                    path="olvide_password/:id"
                    element={<NuevoPassword />}
                  />
                </Route>

                {/*Rutas doctores*/}
                <Route path="/doctor" element={<AuthLayout />}>
                  <Route index element={<LoginDoctor />} />
                  <Route path="registrar" element={<RegistrarDoctor />} />
                  <Route path="confirmar" element={<ConfirmarCuentaDoctor />} />
                  <Route path="olvide_password" element={<OlvidePasswordDoctor />}/>
                  <Route
                    path="olvide_password/:id"
                    element={<NuevoPasswordDoctor />}
                  />
                </Route>

                {/*Rutas Protegidas Pacientes*/}
                <Route path="/admin" element={<RutaProtegida />}>
                  <Route index element={<AdminitrarPacientes />} />
                  <Route path="perfil" element={<EditarPerfil />} />
                  <Route
                    path="cambiar-password"
                    element={<CambiarPassword />}
                  />
                </Route>

                {/*Rutas Protegidas Doctores*/}
                <Route path="/admin/doctor" element={<RutaProtegidaDoctor />}>
                  <Route index element={<AdminitrarDoctor />} />
                  <Route path="perfil" element={<EditarPerfil />} />
                  <Route
                    path="cambiar-password"
                    element={<CambiarPassword />}
                  />
                </Route>
              </Routes>
            </DoctorProvaider>
          </PacientesProvaider>
        </AuthProvaider>
      </BrowserRouter>
    </>
  );
}

export default App;

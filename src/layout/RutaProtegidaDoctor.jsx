import { Outlet, Navigate } from "react-router-dom";
import HeaderDoctor from "../components/doctor/HeaderDoctor";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const RutaProtegidaDoctor = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return "cargando";

  return (
    <>
      <HeaderDoctor />
      {auth?.id ? (
        <main className="mx-auto min-h-[70vh]">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
      <Footer />
    </>
  );
};

export default RutaProtegidaDoctor;

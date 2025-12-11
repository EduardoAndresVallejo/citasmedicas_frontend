import LifeMateLogo from "../assets/logo.png";
import ChatIA from "../components/ChatIA";

const PaginaPrincipal = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ChatIA/>
      {/* Header y Navegación Principal */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-3">
            {/* Ícono de Hospital/Cruz (usamos SVG y color de marca) */}
            <img
              src={LifeMateLogo}
              alt="LifeMate Logo"
              className="w-60 h-40 transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
          {/* Navegación (Solo para Desktop) */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#servicios"
              className="text-gray-600 hover:text-yellow-600 font-medium transition duration-200"
            >
              Servicios
            </a>
            
            <a
              href="#contacto"
              className="text-gray-600 hover:text-yellow-600 font-medium transition duration-200"
            >
              Contacto
            </a>
          </nav>

          <div className="">
            <a
            href="/auth"
            className="bg-yellow-600 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-700 transition duration-300 shadow-lg m-3"
          >
            Soy paciente
          </a>
          <a
            href="/doctor"
            className="bg-green-600 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
          >
            Soy Doctor
          </a>
          </div>
          
        </div>
      </header>

      <main>
        {/* Sección Hero / Banner Principal */}
        <section className="bg-green-50 py-20 md:py-32 text-center border-b-4 border-yellow-400">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 drop-shadow-sm">
              Cuidado de Salud de{" "}
              <span className="text-green-700">Confianza</span> y Calidez
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Tu bienestar es nuestra prioridad. Tecnología avanzada y un equipo
              humano dedicado a tu servicio 24/7.
            </p>
            <div className="space-x-4">
              {/* Botón Primario: Agendar Cita */}
              <a
                href="/auth"
                className="bg-yellow-600 text-gray-900 text-lg px-8 py-3 rounded-xl font-bold hover:bg-yellow-700 transition duration-300 shadow-xl transform hover:scale-105"
              >
                Agendar Consulta
              </a>
              {/* Botón Secundario: Servicios */}
              <a
                href="#servicios"
                className="bg-white text-green-700 text-lg border-2 border-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-100 transition duration-300 shadow-md"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </section>

        {/* Sección 2: Servicios Destacados (Grid) */}
        <section id="servicios" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
              Nuestros Servicios Principales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tarjeta 1: Emergencia */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-500 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                <svg
                  className="h-10 w-10 text-red-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 6.5c-.77-1.333-2.694-1.333-3.464 0L3.3 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Emergencias 24/7
                </h3>
                <p className="text-gray-600">
                  Atención inmediata y especializada para cualquier situación
                  crítica. Estamos listos cuando nos necesitas.
                </p>
              </div>

              {/* Tarjeta 2: Consultas */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-yellow-600 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                <svg
                  className="h-10 w-10 text-yellow-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Medicina General
                </h3>
                <p className="text-gray-600">
                  Programa tu chequeo anual o consulta de seguimiento con
                  nuestros médicos expertos.
                </p>
              </div>

              {/* Tarjeta 3: Especialidades */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-600 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                <svg
                  className="h-10 w-10 text-green-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Especialidades Médicas
                </h3>
                <p className="text-gray-600">
                  Desde Cardiología hasta Pediatría, encuentra al especialista
                  que necesitas en un solo lugar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Contacto Rápido / Llamada a la Acción */}
        <section id="contacto" className="bg-green-700 py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                ¿Necesitas ayuda inmediata?
              </h2>
              <p className="text-xl font-light">
                Llámanos a nuestro número de emergencias.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold mb-2 text-yellow-300">
                809-555-0000
              </span>
              <a
                href="tel:8095550000"
                className="bg-yellow-600 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-700 transition duration-300 shadow-xl"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} LifeMate. Todos los
            derechos reservados.
          </p>
          <p className="text-sm">
            Dirección: Av. Principal 123 | Email: info@LifeMate.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PaginaPrincipal;

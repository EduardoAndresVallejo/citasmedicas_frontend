import ListadoPacientesDoctor from "../../components/doctor/ListadoPacientesDoctor";

const AdminitrarDoctor = () => {

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 md:px-8">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-center text-green-700 mb-8 md:mb-12">
                    Administra tus <span className="text-gray-800">Pacientes</span>
                </h2>
                <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 border-t-4 border-yellow-500 max-w-4xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-6 text-center border-b pb-3">
                        Revisa el <span className="text-yellow-600">Historial de Citas</span> y Pacientes
                    </h3>
                    <ListadoPacientesDoctor />
                </div>
            </div>
        </div>
  );
};

export default AdminitrarDoctor;

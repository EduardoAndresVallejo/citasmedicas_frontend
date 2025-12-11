import { useEffect, useState } from "react";

const Alertas = ({ alerta }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Si hay mensaje, mostrar y luego ocultar a los 3 segundos
    if (alerta.msg) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [alerta]);

  if (!alerta.msg || !visible) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 ${
        alerta.error ? "from-red-500 to-red-700" : "from-green-500 to-green-700"
      } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm shadow-xl transform transition-all duration-300`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alertas;

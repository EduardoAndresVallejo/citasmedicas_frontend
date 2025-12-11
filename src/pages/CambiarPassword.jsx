import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Alertas from "../components/Alerta";
import useAuth from "../hooks/useAuth";

const CambiarPassword = () => {

    const { guardarPassword } = useAuth()
    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()

        if(Object.values(password).some(campo => campo === '')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })

            return
        }

        if(password.pwd_nuevo.length < 6){
            setAlerta({
                msg: 'La constraseña debe tener minimo 6 caracteres',
                error: true
            })
            return
        }
        const respuesta = await guardarPassword(password)

        setAlerta(respuesta)
    }

    
    const { msg } = alerta

    return (
        <>
           <>
    <AdminNav/> 
    
    <h2 className="font-black text-3xl text-center mt-10 text-green-700">Cambiar <span className="text-gray-800">Contraseña</span></h2>
    <p className="text-xl mt-3 mb-10 text-center text-gray-600">Modifica tu <span className="text-yellow-500 font-bold">Contraseña</span> de Acceso</p>

    <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-xl p-8 border-t-4 border-yellow-500">

            {msg && <Alertas alerta={alerta}/>}
            <form onSubmit={handleSubmit}>
                <div className="my-5 relative pt-4">
                    <label className="absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all">Contraseña Actual</label>
                    <input 
                        type="password" 
                        className="border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent w-full p-2 placeholder-gray-400 focus:outline-none transition duration-200"
                        name="pwd_actual"
                        placeholder="Escribe tu Contraseña Actual"
                        onChange={e => setPassword({
                            ...password,
                            [e.target.name] : e.target.value
                        })}
                    />
                </div>

                <div className="my-5 relative pt-4">
                    <label className="absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all">Contraseña Nueva</label>
                    <input 
                        type="password" 
                        className="border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent w-full p-2 placeholder-gray-400 focus:outline-none transition duration-200"
                        name="pwd_nuevo"
                        placeholder="Escribe tu Nueva Contraseña"
                        onChange={e => setPassword({
                            ...password,
                            [e.target.name] : e.target.value
                        })}
                    />
                </div>

                <input 
                    type="submit"
                    value="Guardar Cambios"
                    className="bg-green-600 px-10 py-3 font-bold text-white rounded-full uppercase w-full mt-8 shadow-lg hover:bg-green-700 active:shadow-inner cursor-pointer transition-all duration-300 transform hover:scale-[1.01]"
                />
            </form>
        </div>
    </div>
</>
        </>
    );
}

export default CambiarPassword;

import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import useAuth from "../hooks/useAuth"
import Alerta from "../components/Alerta"

const EditarPerfil = () => {

    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect( () => {
        setPerfil(auth)
    }, [auth])

    const handleSubmit= async e => {
        e.preventDefault()

        const { nombre, email} = perfil

        if([nombre, email].includes('')){
            setAlerta({
                msg: "Email y Nombre son obligatorios",
                error: true
            })
            return
        }
        
        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado)
    }

    const { msg } = alerta

    return (
        <>
           <>
    <AdminNav/> 

    <h2 className="font-black text-3xl text-center mt-10 text-green-700">Editar <span className="text-gray-800">Perfil</span></h2>
    <p className="text-xl mt-3 mb-10 text-center text-gray-600">Modifica tu <span className="text-yellow-500 font-bold">Información</span> Aquí</p>

    <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-xl p-8 border-t-4 border-yellow-500">

            {msg && <Alerta alerta={alerta}/>}
            <form onSubmit={handleSubmit}>
                <div className="my-5 relative pt-4">
                    <label className="absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all">Nombre</label>
                    <input 
                        type="text" 
                        className="border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent w-full p-2 placeholder-gray-400 focus:outline-none transition duration-200"
                        name="nombre"
                        placeholder="Tu Nombre Completo"
                        value={perfil.nombre || ''}
                        onChange={e => setPerfil({
                            ...perfil,
                            [e.target.name] : e.target.value
                        })}
                    />
                </div>
                <div className="my-5 relative pt-4">
                    <label className="absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all">Teléfono</label>
                    <input 
                        type="tel" 
                        className="border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent w-full p-2 placeholder-gray-400 focus:outline-none transition duration-200"
                        name="telefono"
                        placeholder="Número de Teléfono"
                        value={perfil.telefono || ''}
                        onChange={e => setPerfil({
                            ...perfil,
                            [e.target.name] : e.target.value
                        })}
                    />
                </div>

                <div className="my-5 relative pt-4">
                    <label className="absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all">Email</label>
                    <input 
                        type="email" 
                        className="border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent w-full p-2 placeholder-gray-400 focus:outline-none transition duration-200"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={perfil.email || ''}
                        onChange={e => setPerfil({
                            ...perfil,
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

export default EditarPerfil;

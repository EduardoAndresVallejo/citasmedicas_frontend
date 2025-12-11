import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Alertas from '../../components/Alerta'
import clienteAxios from '../../../config/axios'

const RegistrarDoctor = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirpassword] = useState('')
    const [dnidoctor, setDnidoctor] = useState('')
    const [alerta, setAlerta] = useState({})
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()

        if ([nombre, email, password, repetirPassword, dnidoctor].includes('')) {
            setAlerta({ msg: 'Hay campos vacios', error: true })
            return
        }

        if (password !== repetirPassword) {
            setAlerta({ msg: 'Las contrasenas no son iguales', error: true })
            return
        }

        if (password.length < 6) {
            setAlerta({ msg: 'La contrasena es muy corto, agrega minimo 6 caracteres', error: true })
            return
        }

        setAlerta({})

        //crear el usuario en la api

        try {
            console.log(dnidoctor)
            const url = `/doctor`
            await clienteAxios.post(url, {nombre, email, password,dnidoctor})

            setAlerta({
                msg: 'Creado Correctamente, revisa tu email',
                error: false
            })
            navigate("/doctor/confirmar");
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
        <>
            <div className='min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-100'>
    
    {/* Fondo Decorativo Superior (Verde - Moderno) */}
    <div className="absolute top-0 left-0 w-full h-1/3 bg-green-600 transform skew-y-[-3deg] origin-top-left"></div>
    
    <div className='max-w-md w-full relative z-10 p-5'>
        
        {/* Encabezado Principal */}
        <div className='text-center mb-10 mt-10 md:mt-0'>
            <h1 className='text-5xl font-extrabold text-white drop-shadow-lg leading-tight'>
                Crea tu <span className='text-yellow-400'>Cuenta</span>
            </h1>
            <p className='text-lg text-gray-200 mt-2 font-medium'>Visualiza tus Citas</p>
        </div>

        {/* Contenedor del Formulario - Diseño Elevado y Suave */}
        <div className='bg-white shadow-2xl p-10 rounded-xl border border-gray-200 transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out'>
            
            {msg && <Alertas 
                alerta={alerta}
            />}

            <form onSubmit={handleSubmit} className='space-y-6'>
                
                {/* Campo Nombre */}
                <div className="relative pt-4">
                    <label className='absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all'>
                        Nombre
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder='Tu Nombre'
                            className='w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none transition duration-200'
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <svg className="absolute left-2 bottom-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                </div>

                {/* Campo Email */}
                <div className="relative pt-4">
                    <label className='absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all'>
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder='Email de registro'
                            className='w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none transition duration-200'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <svg className="absolute left-2 bottom-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v4a2 2 0 002 2h14a2 2 0 002-2v-4M3 8l7.89 5.26a2 2 0 002.22 0L21 8"></path></svg>
                    </div>
                </div>

                <div className="relative pt-4">
                    <label className='absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all'>
                        DNI Doctor
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            placeholder='Email de registro'
                            className='w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none transition duration-200'
                            value={dnidoctor}
                            onChange={e => setDnidoctor(e.target.value)}
                        />
                        <svg className="absolute left-2 bottom-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v4a2 2 0 002 2h14a2 2 0 002-2v-4M3 8l7.89 5.26a2 2 0 002.22 0L21 8"></path></svg>
                    </div>
                </div>

                {/* Campo Contraseña */}
                <div className="relative pt-4">
                    <label className='absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all'>
                        Contraseña
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder='Tu Contraseña'
                            className='w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none transition duration-200'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <svg className="absolute left-2 bottom-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                </div>

                {/* Campo Repetir Contraseña */}
                <div className="relative pt-4">
                    <label className='absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all'>
                        Repetir Contraseña
                    </label>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder='Repite tu Contraseña'
                            className='w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none transition duration-200'
                            value={repetirPassword}
                            onChange={e => setRepetirpassword(e.target.value)}
                        />
                        <svg className="absolute left-2 bottom-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                </div>

                {/* Botón de Submit - Efecto de Presión y Color Acorde */}
                <input
                    type="submit"
                    value="Crear una Cuenta"
                    className='w-full py-3 px-4 bg-yellow-500 text-green-800 font-extrabold uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-inner active:bg-yellow-600 cursor-pointer tracking-widest mt-8 transform hover:scale-105'
                />
            </form>

            {/* Navegación Inferior */}
            <nav className='mt-8 text-center'>
                <Link
                    className='text-sm text-gray-600 hover:text-green-700 hover:underline transition-colors duration-200 font-medium'
                    to="/doctor">¿Ya tienes una cuenta? <span className='font-bold'>Inicia Sesión</span>
                </Link>
            </nav>
        </div>
        
    </div>
</div>
        </>
    );
}

export default RegistrarDoctor;

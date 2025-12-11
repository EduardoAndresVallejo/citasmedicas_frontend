import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alertas from '../components/Alerta'
import clienteAxios from '../../config/axios'

const ConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
    const [cargando, setCargando] = useState(true)
    const [alerta, setAlerta] = useState({})
    const [token, setToken] = useState()
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()

        console.log(token)

        try {
            const url = `/doctores/confirmar`;
            const { data } = await clienteAxios.post(url, { token })
            setAlerta({
                msg: data.msg
            })
            setCuentaConfirmada(true)
            navigate("/auth");
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
        setCargando(false)
    }




    return (
        <>
            <div className='min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-100'>
    
    <div className="absolute top-0 left-0 w-full h-1/3 bg-green-600 transform skew-y-[-3deg] origin-top-left"></div>
    
    <div className='max-w-md w-full relative z-10 p-5'>
        
        <div className='text-center mb-10 mt-10 md:mt-0'>
            <h1 className='text-5xl font-extrabold text-white drop-shadow-lg leading-tight'>
                Confirma tu <span className='text-yellow-400'>Cuenta</span>
            </h1>
            <p className='text-lg text-green-400 mt-2 font-medium'>Comienza a Administrar Pacientes</p>
        </div>

        <div className='bg-white shadow-2xl p-10 rounded-xl border border-gray-200 transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out'>
            
            {!cargando &&
                <Alertas
                    alerta={alerta}
                />}
                
            <form onSubmit={handleSubmit} className='space-y-6'>
                
                <div className="relative pt-4">
                    <label className='absolute top-0 left-0 text-sm font-semibold text-gray-700 transition-all'>
                        Ingresa tu token
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder='064527'
                            className='w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:border-green-500 rounded-none bg-transparent text-gray-900 placeholder-gray-400 text-center text-3xl tracking-widest focus:outline-none transition duration-200'
                            value={token}
                            onChange={(e) => {
                                const valor = e.target.value.slice(0, 6);
                                setToken(valor);
                            }}
                        />
                        <svg className="absolute left-2 bottom-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2v5.5m-3.955-4.595l-3.23 3.23a2 2 0 01-1.414.586H10v-3.586m6.76 3.23l-3.23 3.23a2 2 0 01-1.414.586H10v-3.586m-6.76-3.23l3.23-3.23a2 2 0 011.414-.586H10v3.586"></path></svg>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Validar Token"
                    className='w-full py-3 px-4 bg-yellow-500 text-green-800 font-extrabold uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-inner active:bg-yellow-600 cursor-pointer tracking-widest mt-8 transform hover:scale-105'
                />
            </form>

            {cuentaConfirmada &&
                <nav className='mt-8 flex justify-center'>
                    <Link
                        className='text-sm text-gray-600 hover:text-green-700 hover:underline transition-colors duration-200 font-medium'
                        to="/"><span className='font-bold'>Inicia Sesión</span>
                    </Link>
                </nav>}
        </div>
        
    </div>
</div>
        </>
    );
}

export default ConfirmarCuenta;

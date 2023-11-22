import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Sessão expirada!!!', "erro")
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>

            <img
                className='w-full h-72 object-cover border-b-8 border-white'
                src="https://i.imgur.com/ZZFAmzo.jpg" alt="Capa do Perfil" />

            <img
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                src={usuario.fotoUsuario} alt={`Foto de perfil de ${usuario.nomeUsuario}`} />

            <div
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-sky-500 text-white text-2xl items-center justify-center"
            >
                <p>Nome: {usuario.nomeUsuario} </p>
                <p>Email: {usuario.emailUsuario}</p>
            </div>

        </div>
    )
}

export default Perfil
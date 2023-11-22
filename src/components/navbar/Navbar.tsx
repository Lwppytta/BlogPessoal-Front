import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import './Navbar.css'
import { toastAlerta } from '../../utils/toastAlerta';

function Navbar() {

    let component: ReactNode;

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'sucesso')
        navigate('/login')
    }

    if (usuario.token !== '') {
        component = (
            <div className='w-full font-fontBlog bg-gradient-to-b from-[#b18af4] to-[#7c3aed] justify-center'>
                <div className="w-full flex justify-between text-purple-900 text-lg pl-[2vw]">

                    <Link to='/home'>
                        <img src=".\src\assets\logo.png" alt="LogoNav" className="min-w-[6vw] w-[6vw] my-1" />
                    </Link>

                    <div id="dropNavbar" className='flex'>

                        <Link to='/postagens' className='aparente'>Postagens</Link>
                        <div className='mae'>
                            <Link to='/temas' className='aparente'>Temas</Link>
                            <div className='filha'>
                                <Link to='/temas' >Todos</Link>
                                <Link to='/cadastroTema'>Cadastrar</Link>
                            </div>
                        </div>
                        <Link to='/perfil' className='aparente'>Perfil</Link>
                        <Link to='' onClick={logout} className='aparente'>Sair</Link>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar
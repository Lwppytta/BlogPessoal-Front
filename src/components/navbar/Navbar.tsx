import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta';

import './Navbar.css'

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
            <div className='w-full font-fontBlog bg-gradient-to-b from-[#b18af4] to-[#7c3aed]'>
                <div className="w-full flex justify-between text-purple-900 pl-[2vw] items-center">
                    
                    <div>
                        <Link to='/home' className='flex'>
                            <img
                                src="https://cdn.discordapp.com/attachments/1050597957352833117/1177200280840970290/logo.png?ex=6571a432&is=655f2f32&hm=7a6e4a2ba4bb0422b3c50fa319cf6fd6041dfb81f05e5784d9ea69e61020f04d&"
                                alt="LogoNav"
                                className="min-w-[5vw] w-[5vw] my-1" />
                            <p className='self-end pl-1 text-[1.8vw] font-fontLogo font-bold pb-[.6vw]'>Meu Blog Pessoal</p>
                        </Link>
                    </div>

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
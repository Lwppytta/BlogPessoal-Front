import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import './Navbar.css'

function Navbar() {

    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    return (
        <>
            <div id="menuNavbar" className='w-full bg-violet-600 text-white
                flex justify-center '>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold'>Blog Pessoal</Link>

                    <div id="dropNavbar">
                        <ul>
                            <li><a>Postagem</a></li>
                            <li>
                                <a>Temas</a>
                                <ul>
                                    <li><Link to='/temas' >Todos</Link></li>
                                    <li><Link to='/cadastroTema'>Cadastrar</Link></li>
                                </ul>
                            </li>
                            <li><a>Perfil</a></li>
                            <li><Link to='' onClick={logout}>Sair</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
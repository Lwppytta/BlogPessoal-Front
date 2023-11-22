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
        toastAlerta('Usuário deslogado com sucesso','sucesso')
        navigate('/login')
    }

    if (usuario.token !== '') {
        component = (
            <div id="menuNavbar" className='w-full bg-violet-600 text-white
        flex justify-center '>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold'>Blog Pessoal</Link>

                    <div id="dropNavbar">
                        <ul>
                            <li><Link to='/postagens' >Postagens</Link></li>
                            <li>
                                <Link to=''>Temas</Link>
                                <ul>
                                    <li><Link to='/temas' >Todos</Link></li>
                                    <li><Link to='/cadastroTema'>Cadastrar</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/perfil'>Perfil</Link></li>
                            <li><Link to='/teste'>Teste</Link></li>
                            <li><Link to='' onClick={logout}>Sair</Link></li>
                        </ul>
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
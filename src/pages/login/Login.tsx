import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <>
            <div className="grid grid-cols-1 bg-[white] lg:grid-cols-2 h-screen place-items-center font-bold">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4"
                    onSubmit={login}>
                    <h2 className="font-fontBlog text-violet-950 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="emailUsuario" className="text-violet-900">Usuário</label>
                        <input
                            type="text"
                            id="emailUsuario"
                            name="emailUsuario"
                            placeholder="Usuario"
                            className="border-2 border-violet-400 rounded p-2"
                            value={usuarioLogin.emailUsuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className="text-violet-900">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-violet-400 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-violet-500 flex justify-center
                                   hover:bg-violet-800 text-white w-1/2 py-2">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>}
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p className="flex">
                        <p className="px-1 text-violet-950">Não tem uma conta?{' '}</p>
                        <Link to="/cadastro" className="text-violet-500 hover:no-underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;
import { FacebookLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import "./Footer.css"

function Footer() {

    let data = new Date().getFullYear()

    let component: ReactNode;
    const { usuario } = useContext(AuthContext)

    if (usuario.token !== '') {
        component = (
            <div className="w-full font-fontBlog text-[2vw] bg-gradient-to-b from-cyan-500 to-blue-500">
                <div className="w-full flex justify-between text-sky-900 items-center px-4 py-2">
                    <div className='flex flex-col'>
                        <LinkedinLogo size={30} weight='bold' />
                        <GithubLogo size={30} weight='bold' />
                        <FacebookLogo size={30} weight='bold' />
                    </div>

                    <div className='text-center'>
                        <p className='text-xl font-bold'>Blog Pessoal Generation</p>
                        <p className=''>Copyright: {data}</p>
                    </div>

                    <div className="direita flex flex-col text-end">
                        <p >Politica de Privacidade</p>
                        <p >Termos e Condições</p>
                        <a href="" >Sobre mim!</a>
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

export default Footer
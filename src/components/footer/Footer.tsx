import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {

    let data = new Date().getFullYear()

    let component: ReactNode;
    const { usuario } = useContext(AuthContext)

    if (usuario.token !== '') {
        component = (
            <div className="w-full font-fontBlog text-[2vw] bg-gradient-to-b from-cyan-500 to-blue-500 justify-center">
                <div className="w-full flex justify-between text-sky-900 items-center px-4 py-2">
                    <div className='flex flex-col'>
                        <LinkedinLogo size={30} weight='bold' />
                        <InstagramLogo size={30} weight='bold' />
                        <FacebookLogo size={30} weight='bold' />
                    </div>

                    <div className=''>
                        <p className='text-xl font-bold'>Blog Pessoal Generation</p>
                        <p className=''>Copyright: {data}</p>
                    </div>

                    <div className="flex flex-col text-end align-center">
                        <p className="hover:text-cyan-800 cursor-pointer p-0">Politica de Privacidade</p>
                        <p className="hover:text-cyan-800 cursor-pointer p-0 ">Termos e Condições</p>
                        <a href="" className="hover:text-cyan-800 p-0">Sobre mim!</a>
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
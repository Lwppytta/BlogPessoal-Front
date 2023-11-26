import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hearts } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { toastAlerta } from '../../../utils/toastAlerta';

import Postagem from '../../../models/Postagem';
import CardPostagens from '../cardPostagens/CardPostagens';
import ModalPostagem from '../modalPostagem/ModalPostagem';

function ListaPostagens() {

    const navigate = useNavigate();

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta("Sessão expirada...", "erro");
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta("Sessão expirada...", "erro");
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    return (
        <>
            <div className='font-fontBlog grid grid-cols-3 gap-4 z-0 w-[80vw] px-[1vw] py-4 mx-auto my-0 bg-[white] shadow-[0px_8px_10px_10px_rgba(0,0,0,0.3)]'>
                <div></div>
                <h1 className='text-center text-3xl text-violet-950 font-bold'>Postagens</h1>
                <div className='justify-self-center'><ModalPostagem /></div>

                {postagens.length === 0 && (
                    <div className='col-span-3 justify-self-center'>
                        <Hearts
                            height="80"
                            width="80"
                            color="#7c3aed"
                            ariaLabel="hearts-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                )}

                {postagens.map((postagem) => (
                    <CardPostagens key={postagem.id} post={postagem} />
                ))}

            </div>
        </>
    )
}

export default ListaPostagens
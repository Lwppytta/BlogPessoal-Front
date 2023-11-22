import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';

import Postagem from '../../../models/Postagem';
import CardPostagens from '../cardPostagens/CardPostagens';
import { toastAlerta } from '../../../utils/toastAlerta';
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
            <div className='font-fontBlog container z-0 w-[80vw] h-[100vh] px-[1vw] py-4 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.3)] mx-auto my-0 grid grid-cols-3 gap-4'>
                <div></div>
                <h1 className='text-center text-3xl text-violet-950 font-bold'>Postagens</h1>
                <div className='justify-self-center'><ModalPostagem /></div>

                {postagens.length === 0 && (
                    <Dna
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper mx-auto"
                    />
                )}

                {postagens.map((postagem) => (
                    <CardPostagens key={postagem.id} post={postagem} />
                ))}

            </div>
        </>
    )
}

export default ListaPostagens
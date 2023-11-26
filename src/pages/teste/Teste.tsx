import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hearts } from 'react-loader-spinner';

import { buscar } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';

import Postagem from "../../models/Postagem"
import Tema from "../../models/Tema"
import CardTeste from "./CardTPost"
import CardTTema from './CardTTema';

function Teste() {

    const [postagens, setPostagens] = useState<Postagem[]>([]);
    const [temas, setTemas] = useState<Tema[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const navigate = useNavigate();

    useEffect(() => {
        if (token === '') {
            toastAlerta("Sessão expirada...", "erro");
            navigate('/');
        }
    }, [token])

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
        buscarPostagens()

    }, [postagens.length])

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta("Sessão expirada...", "erro");
                handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    const filterItems = (catItems: String) => {
        const updateItems = postagens.filter((curItems) => {
            return curItems.tema?.descricao === catItems
        });
        setPostagens(updateItems);
    }

    return (
        <>
            <div className='font-fontBlog grid grid-cols-5 gap-4 z-0 w-[80vw] px-[1vw] py-4 mx-auto my-0 bg-[white] shadow-[0px_8px_10px_10px_rgba(0,0,0,0.3)]'>

                <div className='flex flex-col'>
                    <h2 className=''>Temas:</h2>
                    {temas.map((val) => (

                        <button className='border' onClick={() => filterItems(val.descricao)}>
                            <CardTTema key={val.id} val={val} />
                        </button>
                    ))}
                </div>


                <div className="col-span-4 grid grid-cols-3 gap-4">
                    <h1 className='col-span-3'>Todas as postagens:</h1>
                    {postagens.map((val) => (
                        <CardTeste key={val.id} val={val} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default Teste
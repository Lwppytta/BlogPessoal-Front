import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

import Slide from "../../components/slide/Slide"

function Home() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Sessão expirada!!!', "erro")
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <>
            <div>
                <Slide />
            </div>
        </>
    )
}

export default Home
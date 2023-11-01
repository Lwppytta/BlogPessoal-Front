import { useState, useEffect } from "react"

function Tarefa(){
    const [isCompletado, setIsCompletado] = useState(false)
    const [tarefa, setTarefa] = useState('')

    useEffect(() => {
        if(isCompletado){
            setTarefa('Parabens, você concluiu!')
        }
    }), [isCompletado]

    return(
        <div>
            <h1>Tarefa</h1>
            <h3>{tarefa}</h3>
            <p>Clique para concluir</p>
            <button onClick={() => setIsCompletado(true)}>Concluir</button>
        </div>
    )
}

export default Tarefa
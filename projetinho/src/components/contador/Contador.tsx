import { useState } from "react"

function Contador(){
    const[valor,setValor] = useState(0)

    function SomarMaisum(){
        setValor(valor + 1)
    }

    return(
        <div>
            <p>O valor é: {valor}</p>
            <button onClick={SomarMaisum}>Adicionar Um</button>
        </div>
    )
}

export default Contador
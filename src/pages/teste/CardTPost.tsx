import Postagem from "../../models/Postagem"

interface TesteProps{
    val: Postagem
}

function CardTeste({val}:TesteProps) {

    return (
        <>
            <div className="border flex flex-col rounded">
                <h2>{val.titulo}</h2>
                <p>{val.texto}</p>
                <p>Tema: {val.tema?.descricao}</p>
            </div>
        </>
    )
}

export default CardTeste
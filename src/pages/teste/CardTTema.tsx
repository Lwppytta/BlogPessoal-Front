import Tema from "../../models/Tema"

interface TesteProps {
    val: Tema
}

function CardTTema({ val }: TesteProps) {

    return (
        <>
            <h2>{val.descricao}</h2>
        </>
    )
}

export default CardTTema
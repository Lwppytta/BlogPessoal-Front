interface CardProps{
    titulo: string
    descricao: string
}

function Card(props: CardProps) {
  return (
    <div style={{
        width: "500px",
        border: "5px solid crimson",
        margin: "0 0 1rem 0"
    }}>
        <h1>{ props.titulo }</h1>
        <p>{ props.descricao }</p>
    </div>
  )
}

export default Card
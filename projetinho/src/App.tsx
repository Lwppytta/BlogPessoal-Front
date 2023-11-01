import Card from './components/card/Card'
import Contador from './components/contador/Contador'
import Tarefa from './components/tarefa/Tarefa'

function App() {
    return (  
        <>
        <Card  titulo='Anime' descricao='Naruto'/>
        <Contador />
        <Tarefa />
        </>
    )
}

export default App
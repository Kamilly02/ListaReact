import Tarefa from "./Tarefa";

function ListaTarefa() {
    const Tarefa = ["Limpar casa", "Lavar carro", "Ir ao supermercado", "Estudar"]
    return (
        <>
            <h1>Lista de Tarefas Residencial:</h1>

            <ul>
                {tarefa.map((Listadetarefas) => (Tarefa tarefa ={Listadetarefas}))}
            </ul>
        </>
    );

}

export default ListaTarefa
const inputTarefa = document.getElementById("inputTarefa")
const botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa")
const listaTarefas = document.getElementById("listaTarefas")
const mensagemErro = document.getElementById("error")
const contadorDeTarefas = document.getElementById("contadorDeTarefas")
const contadorPendentes = document.getElementById("contadorPendentes")
const contadorConcluidas = document.getElementById("contadorConcluidas")
const selectTarefas = document.getElementById("selectTarefas")
const filtro = document.getElementById("filtro")

let tarefas = []

function atualizarContador() {
    const total = tarefas.length
    let pendentes = 0
    let concluidas = 0

    const tarefasDOM = document.querySelectorAll("#listaTarefas li")

    tarefasDOM.forEach((tarefa) => {
        const span = tarefa.querySelector("span")
        if (span.classList.contains("concluida")) {
            concluidas++
        } else {
            pendentes++
        }
    })
    contadorDeTarefas.textContent = `Total de tarefas: ${tarefas.length}`
    contadorPendentes.textContent = `Tarefas pendentes: ${pendentes}`
    contadorConcluidas.textContent = `Tarefas Concluídas: ${concluidas}`
}

    function atualizarVisibilidadeFiltro() {
        if (tarefas.length === 0) {
            filtro.style.display = "none"
            selectTarefas.style.display = "none"
        } else {
            filtro.style.display = "flex"
            selectTarefas.style.display = "flex"
        }
    }

    function aplicarFiltro() {
    const filtro = selectTarefas.value;
    const tarefasDOM = document.querySelectorAll("#listaTarefas li");

    tarefasDOM.forEach((tarefa) => {
        const span = tarefa.querySelector("span");
        const estaConcluida = span.classList.contains("concluida");

        if (filtro === "todas") {
            tarefa.style.display = "flex";
        } else if (filtro === "concluida" && estaConcluida) {
            tarefa.style.display = "flex";
        } else if (filtro === "pendente" && !estaConcluida) {
            tarefa.style.display = "flex";
        } else {
            tarefa.style.display = "none";
        }
    });
}
    selectTarefas.addEventListener("change", aplicarFiltro)

botaoAdicionarTarefa.addEventListener("click", function () {
    if (inputTarefa.value == "") {
        mensagemErro.innerHTML = `Insira um valor no campo de Tarefa para adicionar uma tarefa`
    } else {
        mensagemErro.textContent = ""

        const novaTarefa = {
            id:Date.now(),
            texto: inputTarefa.value
        }
        const tarefa = document.createElement("li")
        tarefa.dataset.id = novaTarefa.id

        const textoTarefa = document.createElement("span")
        textoTarefa.textContent = novaTarefa.texto
        textoTarefa.style.cursor = "pointer"

        const botaoExcluir = document.createElement("button")
        botaoExcluir.textContent = "Remover"

        textoTarefa.addEventListener("click", function() {
        textoTarefa.classList.toggle("concluida")
        atualizarVisibilidadeFiltro();
        aplicarFiltro();
        atualizarContador()
    })

        botaoExcluir.addEventListener("click", function() {
            tarefa.remove()
            tarefas = tarefas.filter(t => t.id != tarefa.dataset.id)
            atualizarVisibilidadeFiltro();
            aplicarFiltro();
            atualizarContador()
        })

        tarefa.appendChild(textoTarefa)
        tarefa.appendChild(botaoExcluir)
        listaTarefas.appendChild(tarefa)

        tarefas.push(novaTarefa)
        atualizarVisibilidadeFiltro();
        aplicarFiltro();
        atualizarContador()
        inputTarefa.value = ""
    }
})
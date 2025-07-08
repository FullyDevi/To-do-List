const inputTarefa = document.getElementById("inputTarefa")
const botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa")
const listaTarefas = document.getElementById("listaTarefas")
const mensagemErro = document.getElementById("error")
const contadorDeTarefas = document.getElementById("contadorDeTarefas")

let tarefas = []

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
    })

        botaoExcluir.addEventListener("click", function() {
            tarefa.remove()
            tarefas = tarefas.filter(t => t.id != tarefa.dataset.id)
            atualizarContador()
        })

        tarefa.appendChild(textoTarefa)
        tarefa.appendChild(botaoExcluir)
        listaTarefas.appendChild(tarefa)

        tarefas.push(novaTarefa)
        atualizarContador()
        inputTarefa.value = ""
    }
})

function atualizarContador() {
    contadorDeTarefas.textContent = `Total de tarefas: ${tarefas.length}`
}
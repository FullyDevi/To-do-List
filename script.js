const inputTarefa = document.getElementById("inputTarefa")
const botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa")
const listaTarefas = document.getElementById("listaTarefas")
const mensagemErro = document.getElementById("error")

let tarefas = []

botaoAdicionarTarefa.addEventListener("click", function () {
    if (inputTarefa.value == "") {
        mensagemErro.innerHTML = `Insira um valor no campo de Tarefa para adicionar uma tarefa`
    } else {
        mensagemErro.textContent = ""
        const tarefa = document.createElement("li")
        tarefa.textContent = inputTarefa.value

        tarefa.addEventListener("click", function() {
        tarefa.classList.toggle("concluida")
    })

        listaTarefas.appendChild(tarefa)

        tarefas.push(inputTarefa.value)
        inputTarefa.value = ""
    }
})
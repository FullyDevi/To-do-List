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

        const textoTarefa = document.createElement("span")
        textoTarefa.textContent = inputTarefa.value
        textoTarefa.style.cursor = "pointer"

        const botaoExcluir = document.createElement("button")
        botaoExcluir.textContent = "Remover"

        textoTarefa.addEventListener("click", function() {
        textoTarefa.classList.toggle("concluida")
    })

        botaoExcluir.addEventListener("click", function() {
            tarefa.remove()
        })

        tarefa.appendChild(textoTarefa)
        tarefa.appendChild(botaoExcluir)
        listaTarefas.appendChild(tarefa)

        tarefas.push(inputTarefa.value)
        inputTarefa.value = ""
    }
})
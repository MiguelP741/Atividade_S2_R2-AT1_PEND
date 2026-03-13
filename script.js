const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.querySelector("#btnAdicionar");
const mensagem = document.getElementById("mensagem");
const listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", function(){

    const tarefaAdicionada = inputTarefa.value.trim();

    if(tarefaAdicionada === ""){ 
        mensagem.textContent = "Preencha os campos corretamente!";
        mensagem.className = "text-danger fw-bold";
        return;
    }

    const adicionarTarefaLista = document.createElement("li");
    adicionarTarefaLista.textContent = tarefaAdicionada;
    adicionarTarefaLista.className = "list-group-item";

    listaTarefas.appendChild(adicionarTarefaLista);
    inputTarefa.value = "";

    mensagem.textContent = "Sua tarefa foi adicionada com sucesso!";
    mensagem.className = "text-success fw-bold";

});
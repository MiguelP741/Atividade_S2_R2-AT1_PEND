let nomeCliente = document.getElementById("nomeCliente");
let btnAlterar = document.querySelector("#btnAlterar");
let mensagem = document.getElementById("mensagem");
let nomeAlterado = document.querySelector("#nomeAlterado")

btnAlterar.addEventListener("click", ()=>{

    nomeCliente.innerText = `Olá ${nomeAlterado.value}, como vai?`;

    mensagem.innerText = `Alteração feita com sucesso!`
    mensagem.className = 'text-success fw-bold'

});
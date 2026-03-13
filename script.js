let nomeCadastro = document.getElementById("nomeCadastro");
let btnCadastrar = document.querySelector("#btnCadastrar");
let mensagem = document.getElementById("mensagem");

btnCadastrar.addEventListener("click", ()=>{

    mensagem.innerText = `Bem vindo: ${nomeCadastro.value}!`
    mensagem.className = 'text-success fw-bold'

});
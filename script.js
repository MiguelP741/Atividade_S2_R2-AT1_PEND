let nomeCadastro = document.getElementById("nomeCadastro");
let btnCadastrar = document.querySelector("#btnCadastrar");

btnCadastrar.addEventListener("click", ()=>{
   
    alert(`Bem vindo: ${nomeCadastro.value}!`)

});
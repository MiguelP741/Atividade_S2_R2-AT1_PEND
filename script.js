let listaCarrinho = document.getElementById("listaCarrinho");
let btnAdicionar = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let itemAdicionado = document.getElementById("itemAdicionado")

btnAdicionar.addEventListener("click", () => {

    const item = itemAdicionado.value;

    const adicionarItem = document.createElement("li");

    adicionarItem.textContent = item;

    listaCarrinho.appendChild(adicionarItem);

    itemAdicionado.value = "";

    mensagem.innerText = `Alteração feita com sucesso!`
    mensagem.className = 'text-success fw-bold'

});
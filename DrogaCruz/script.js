let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;

const getElement = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
    atualizarCarrinho();
});

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("total", total.toFixed(2));
}

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    salvarCarrinho();
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = getElement("itens-carrinho");
    const contador = getElement("contador");
    const totalSpan = getElement("total");
    
    if (contador) contador.textContent = carrinho.length;
    if (!lista || !totalSpan) return;

    lista.innerHTML = "";
    carrinho.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        let btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.classList.add("btn-remover");
        btnRemover.onclick = () => removerItem(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });

    totalSpan.textContent = total.toFixed(2);
}

function removerItem(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    salvarCarrinho();
    atualizarCarrinho();
}

function toggleModal(id, estado) {
    const modal = getElement(id);
    if (modal) modal.style.display = estado ? "block" : "none";
}

function abrirCarrinho() {
    atualizarCarrinho();
    toggleModal("carrinho", true);
}

function fecharCarrinho() {
    toggleModal("carrinho", false);
}

function buscarProduto() {
    const input = getElement("pesquisa").value.toLowerCase();
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        let nome = produto.getAttribute("data-nome").toLowerCase();
        produto.style.display = nome.includes(input) ? "block" : "none";
    });
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    alert("Compra finalizada! Obrigado por comprar conosco.");
    carrinho = [];
    total = 0;
    salvarCarrinho();
    atualizarCarrinho();
    fecharCarrinho();
}

window.onclick = function(event) {
    const modais = ["carrinho", "loginModal"];
    modais.forEach(id => {
        const modal = getElement(id);
        if (event.target === modal) {
            toggleModal(id, false);
        }
    });
};




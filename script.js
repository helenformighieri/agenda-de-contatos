const contatoForm = document.getElementById("contatoForm");
const tabelaContatos = document.getElementById("tabelaContatos");

contatoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;

    tabelaContatos.querySelector("tbody").appendChild(novaLinha);


    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
});
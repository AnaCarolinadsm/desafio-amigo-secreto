document.addEventListener("DOMContentLoaded", function() {
    const participantes = [];

    function adicionarAmigo() {
        const input = document.getElementById("amigo");
        const nome = input.value.trim();
        
        if (nome.length === 0) {
            alert("Por favor, digite um nome válido.");
            return;
        }
        
        if (!participantes.includes(nome)) {
            participantes.push(nome);
            atualizarLista();
            input.value = "";
        } else {
            alert("Este nome já foi adicionado.");
        }
    }

    function atualizarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        participantes.forEach(nome => {
            const item = document.createElement("li");
            item.textContent = nome;
            lista.appendChild(item);
        });
    }

    function sortearAmigo() {
        if (participantes.length < 2) {
            alert("Adicione pelo menos 2 participantes.");
            return;
        }

        const sorteado = participantes[Math.floor(Math.random() * participantes.length)];
        exibirResultado(sorteado);
    }

    function exibirResultado(sorteado) {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `<h3>Amigo Secreto:</h3><p>${sorteado}</p>`;
    }

    document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

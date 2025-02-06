let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }
    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let amigoSecreto;
        do {
            amigoSecreto = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (amigoSecreto === amigos[i] || resultado.includes(amigoSecreto));
        
        resultado.push(amigoSecreto);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} -> ${resultado[index]}`;
        listaResultado.appendChild(li);
    });
}

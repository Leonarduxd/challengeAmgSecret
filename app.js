//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos
let amigos = [];

/**
 * Adiciona um amigo à lista de participantes
 */
function adicionarAmigo() {
    // Captura o valor do input
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value;
    
    // Verifica se o nome não está vazio
    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }
    
    // Adiciona o nome à lista
    amigos.push(nome);
    
    // Limpa o campo de entrada
    inputAmigo.value = '';
    
    // Atualiza a lista na interface
    atualizarListaAmigos();
}

/**
 * Atualiza a exibição da lista de amigos na interface
 */
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    // Para cada amigo na lista, cria um elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
}

/**
 * Sorteia um amigo aleatoriamente da lista e exibe na página
 */
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }
    
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibe o resultado na interface
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
}
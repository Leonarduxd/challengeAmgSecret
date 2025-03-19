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
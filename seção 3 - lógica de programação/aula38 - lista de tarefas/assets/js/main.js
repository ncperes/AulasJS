// declarando os elementos
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// função para criar linhas quando necessário
function criaLi() {
    const li = document.createElement('li'); // cria o elemento li
    return li;
}

// função para criar tarefas
function criarTarefa(txtInput) {
    const li = criaLi(); // crio uma novo elemento linha
    li.innerHTML = txtInput; // informo o texto dentro deste elemento
    tarefas.appendChild(li); // informo onde colocar esse novo elemento dentro do html
    limpaInput(li); // funçao q limpa o input
    criarBtnApagar(li); // função q cria um elemento button de apagar a linha criada
    salvarTarefas();
}

// função que limpa o input depois que um valor é adicionado
function limpaInput() {
    inputTarefa.value = ''; // define um valor vazio dentro do input
    inputTarefa.focus(); // faz o ponteiro ficar piscando dentro do input
}

// função que cria um botão para permitir apagar a li criada
function criarBtnApagar(li) {
    li.innerText += ' '; // da um espaço entre o texto e o botão de deletar da li
    const btnApagar = document.createElement('button'); // cria o elemento button
    btnApagar.innerText = 'Apagar'; // define o texto do elemento button
    btnApagar.setAttribute('class', 'apagar'); // definindo a class do novo button
    btnApagar.setAttribute('title', 'Apagar esta tarefa'); // definindo um titulo do novo button
    li.appendChild(btnApagar); // define o local dentro do html que esse button ficará
}

// captura o evento de add tarefa usando 'Enter'
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { // keyCode do botão enter é 13
        if (!inputTarefa.value) return; // condição para aceitar valores vazios
        criarTarefa(inputTarefa.value); // adiciona tarefa
        limpaInput(); // limpa o input
    }
});

// btnTarefa.addEventListener('click', function() {
//     if (!inputTarefa.value) return;
//     criarTarefa(inputTarefa.value);
//     limpaInput();
    
// });

// captura os eventos de todos os botões
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // remove o elemento pai, por consequencia os elementos filhos são excluidos tambem
        salvarTarefas();
    }
    if (el.classList.contains('btn-tarefa')) {
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
        limpaInput();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTxt = tarefa.innerText;
        tarefaTxt = tarefaTxt.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTxt);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

const form = document.getElementById('form-formulario');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>';
const atividades = []; //array
const notas = []; //array
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:")); // para que o usuário digite a nota mínima antes de iniciar o programa.

let linhas = '';

form.addEventListener('submit', function(e) { 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
}); 

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('materia');
    const inputNotaAtividade = document.getElementById('nota');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`); 
    }else{

    atividades.push(inputNomeAtividade.value); //serve para adicionar conteúdo dentro do array
    notas.push(parseFloat(inputNotaAtividade.value)); //parseFloat serve para alterar o conteúdo de string para número

    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado}</td>`;  // onde "if" é caracterizado por "?" e "else" por " : "
    linha += '</tr>';

    linhas += linha;
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;  //inserindo conteúdo dentro de uma tag
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2); // toFixed limita as casa decimais.
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >=notaMinima ? spanAprovado : spanReprovado;   

    }

    function calculaMediaFinal(){
        let somaDasNotas = 0;

        for(let i = 0; i < notas.length; i++){ //notas.lenght é a quantidade de notas que o usuário inseriu
            somaDasNotas += notas[i];
        }
    
        return  somaDasNotas / notas.length;
    }
let a = 10;
let b = 6;

alert('Variável a = 10 \nVariável b = 6');
console.log('Variável a = 10; variável b = 6.');

function diferenca() {
    let resultado = a - b;
    console.log(`A diferença entre elas é de ${resultado}.`);
}

function dobroEtriplo() {
    let resultado = (a*2) + (b*3);
    console.log(`O resultado da soma do dobro da primeira variável mais o triplo da segunda variável é ${resultado}.`);
}

function multiplicacao() {
    let resultado = a * b;
    console.log(`O resultado da multiplicação das variáveis é ${resultado}.`);
}

function mostrarQuartoCalculo() {
    let divFormulario = document.getElementById('formulario');
    divFormulario.classList.toggle('displayBlock');
    let sumirBotoes = document.getElementById('botoes');
    sumirBotoes.classList.toggle('displayNone');
}

function novasVariaveis() {
    a = parseInt(document.getElementById('variavelA').value);
    b = parseInt(document.getElementById('variavelB').value);
    ordemDecrescente = [a, b];
    ordemDecrescente.sort(function(a, b){return b-a}); //É uma função específica que já faz os números do array ficarem em ordem decrescente
    console.log('Agora, com os novos números digitados:');
    console.log(`Em ordem decrescente, ficam: ${ordemDecrescente}`);
}
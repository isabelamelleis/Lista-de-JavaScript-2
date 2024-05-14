// cria as variáveis 'a' e 'b'
let a = 10;
let b = 6;

// mostra um alert com as variáveis já criadas
alert('Variável a = 10 \nVariável b = 6');
console.log('Variável a = 10; variável b = 6.');

//função para fazer o primeiro cálculo
function diferenca() {
    let resultado = a - b;
    console.log(`A diferença entre elas é de ${resultado}.`);
}

//função para fazer o segundo cálculo
function dobroEtriplo() {
    let resultado = (a*2) + (b*3);
    console.log(`O resultado da soma do dobro da primeira variável mais o triplo da segunda variável é ${resultado}.`);
}

//função para fazer o terceiro cálculo
function multiplicacao() {
    let resultado = a * b;
    console.log(`O resultado da multiplicação das variáveis é ${resultado}.`);
}

//função para colocar display:none na div com id 'botoes' e colocar display:block na div com 'formulario'
function mostrarQuartoCalculo() {
    let divFormulario = document.getElementById('formulario');
    divFormulario.classList.toggle('displayBlock');
    let sumirBotoes = document.getElementById('botoes');
    sumirBotoes.classList.toggle('displayNone');
}

//função para fazer o quarto cálculo
function novasVariaveis() {
    
    //transforma os inputs do html em variáveis 
    a = parseInt(document.getElementById('variavelA').value);
    b = parseInt(document.getElementById('variavelB').value);
    
    //coloca as variáveis em um array
    ordemDecrescente = [a, b];

    //é uma função específica que já faz os números do array ficarem em ordem decrescente
    ordemDecrescente.sort(function(a, b){return b-a});

    //mostra os resultados no console
    console.log('Agora, com os novos números digitados:');
    console.log(`Em ordem decrescente, ficam: ${ordemDecrescente}`);
}
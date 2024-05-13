let a = 10;
let b = 6;

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

function novasVariaveis() {
    a = parseInt(prompt('Digite um novo valor inteiro para "a": '));
    b = parseInt(prompt('Digite um novo valor inteiro para "b": '));
    ordemDecrescente = [a, b];
    ordemDecrescente.sort(function(a, b){return b-a}); //É uma função específica que já faz os números do array ficarem em ordem decrescente
    console.log('Agora, com os números digitados')
    console.log(`Em ordem decrescente, ficam: ${ordemDecrescente}`);
}

alert('Variável a = 10 \nVariável b = 6');
diferenca();
dobroEtriplo();
multiplicacao();
novasVariaveis();
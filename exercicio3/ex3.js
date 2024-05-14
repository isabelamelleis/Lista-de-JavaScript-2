function calcularTaxaINSS() {
    
    //transforma o input do html em uma variável
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value);

    //calcula qual será taxa de acordo com o salário
    let taxaINSS;
    if (salarioBruto <= 1000.00) {
        taxaINSS = 0.08;
    } if ((salarioBruto > 1000.00) && (salarioBruto <= 1500.00)) {
        taxaINSS = 0.085;
    } else {
        taxaINSS = 0.09;
    }

    //calcula o valor do INSS
    let valorINSS = salarioBruto * taxaINSS;

    //calcula o valor do salário líquido, após desconto do INSS
    let salarioLiquido = salarioBruto - valorINSS;

    //mostra o resultado no console
    console.log(`Salário bruto: ${salarioBruto}`);
    console.log(`Taxa do INSS: ${taxaINSS}`);
    console.log(`Valor do INSS: ${valorINSS}`);
    console.log(`Salário líquido: ${salarioLiquido}`);

    //coloca classes nas divs do html para que uma desapareça e a outra apareça no lugar
    //primeiro, criei a variável 'divFormulario' e fiz ela ser 'compatível' com elemento que tem o id 'formulario'. Depois, com o 'classList.toggle', fiz com que essa nova variável criada atribuísse a classe 'displayNone' do css no elemento que ela está associada no html. A mesma coisa acontece com a variável seguinte.
    let divFormulario = document.getElementById('formulario');
    divFormulario.classList.toggle('displayNone');
    let divInformacoes = document.getElementById('mostrarResultados');
    divInformacoes.classList.toggle('displayBlock');

    //mostra o resultado no corpo do html
    let mostrarSalarioBruto = document.getElementById('mostrarSalarioBruto');
    mostrarSalarioBruto.innerHTML = salarioBruto;
    let mostrarTaxaINSS = document.getElementById('mostrarTaxaINSS');
    mostrarTaxaINSS.innerHTML = taxaINSS;
    let mostrarValorINSS = document.getElementById('mostrarValorINSS');
    mostrarValorINSS.innerHTML = valorINSS;
    let mostrarSalarioLiquido = document.getElementById('mostrarSalarioLiquido');
    mostrarSalarioLiquido.innerHTML = salarioLiquido;
}
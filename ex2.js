function folhaPagamento() {
    let nomeFuncionario = document.getElementById('nomeFuncionario').value;
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    let valorINSS = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - valorINSS;
    console.log(`Nome do funcionário: ${nomeFuncionario}`);
    console.log(`Salário bruto: ${salarioBruto}`);
    console.log(`Valor do INSS: ${valorINSS}`);
    console.log(`Salário líquido: ${salarioLiquido}`);
    let mostrarTexto = document.getElementById('mostrarTexto')
    mostrarTexto.innerHTML = 'Salário Líquido:'
    let mostrarSalarioLiquido = document.getElementById('mostrarSalarioLiquido');
    mostrarSalarioLiquido.innerHTML = salarioLiquido;
    let maisInformacoes = document.getElementById ('maisInformacoes');
    maisInformacoes.innerHTML = 'Para mais informações, consulte o console clicando F12  ->'
}
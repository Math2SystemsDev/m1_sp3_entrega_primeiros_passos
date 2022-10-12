
//Exercício 01
var n1 = parseInt(prompt('Digite o primeiro número: '));
var n2 = parseInt(prompt('Digite o segundo número: '));

var maiorNumero = Math.max(n1, n2);
var diferenca = Math.abs(n1 - n2);

alert('O maior número é: '+maiorNumero+' e a diferença é: '+diferenca);
 
//--------------------------------------------------------------------------

//exercício 02
var x1 = parseFloat(prompt('Digite o primeiro número: '));
var x2 = parseFloat(prompt('Digite o segundo número: '))

var maiorNumero = Math.max(x1, x2);
var menorNumero = Math.min(x1, x2);

if(x1 && x2 == x1 && x2){
    alert('Números iguais')
}
else {
    alert('O número '+maiorNumero+' é maior que o numero '+menorNumero);
}

//--------------------------------------------------------------------------

//exercício 03
var salario = parseInt(prompt('Digite o valor do salário: '));
var valorPrestacao = parseInt(prompt('Digite o valor da prestação: '));

if(valorPrestacao > ((salario * 30) / 100)){
    alert('Empréstimo não concedido')
}
else{
    alert('Empréstimo concedido')
}

//--------------------------------------------------------------------------

//exercício 04
var umValor = parseInt(prompt('Digite um valor: '))

if(umValor % 5 == 0 && umValor % 3 == 0){
    alert('Valor inválido')
}
else if(umValor % 3 == 0){
    alert('Divisivel por 3')
}
else if(umValor % 5 == 0){
    alert('Divisivel por 5')
}
else if(umValor % 2 == 0){
    alert('numero par')
}
else{
    alert('numero impar')
}

//--------------------------------------------------------------------------

//exercício 05
const valor = parseInt(prompt('Digite um numero: '))

if(valor == 7){
    alert('Sabado')
}
else if(valor == 6){
    alert('Sexta-feira')
}
else if(valor == 5){
    alert('Quinta-feira')
}
else if(valor == 4){
    alert('Quarta-Feira')
}
else if(valor == 3){
    alert('Terça-feira')
}
else if(valor == 2){
    alert('Segunda-feira')
}
else if(valor == 1){
    alert('Domingo')
}
else{
    alert('Erro')
}

//--------------------------------------------------------------------------

//exercício 06
const salarioMensal06 = parseFloat(prompt('Digite o salario: '));
const percentual06 = parseFloat(prompt('Digite o percentual: '));

if(percentual06 <= 5 && percentual06 >= 0){
    alert(`O salário do funcionário corrigido é de: ${salarioMensal06 + (salarioMensal06 * percentual06 / 100)}`)
}else{
    alert('Erro, valor do reajuste está errado');
}

//--------------------------------------------------------------------------

//exercicio 07
const dolar = parseFloat(prompt('Digite um valor: '));
const cotacaoAtual = parseFloat(prompt('Digite uma cotação: '));

const conversao = dolar * cotacaoAtual;

alert('$'+dolar+' é equivalente a '+'R$'+conversao+' tendo '+cotacaoAtual+' como cotação');

//--------------------------------------------------------------------------



//--------------------------------------------------------------------------

//exercício 09
const tempo = parseFloat(prompt('Digite o tempo gasto na viagem: '));
const velocidade = parseFloat(prompt('Digite um valor para velocidade: '));
const distancia = tempo * velocidade;
const litros_usados = distancia / 12;

alert('Seu veículo percorreu '+ distancia+' km '+' a '+velocidade+' em '+ tempo+' de viagem e consumiu '+litros_usados.toFixed(2)+' de gasolina');

//--------------------------------------------------------------------------

//exercício 10
const valorVariavel = parseFloat(prompt('Digite o valor: '));
const taxaVariavel = parseFloat(prompt('Digite a taxa: '));
const tempoVariavel = parseFloat(prompt('Digite o tempo de atraso: '));

//⁠PRESTAÇÃO = VALOR + (VALOR* (TAXA/100) * TEMPO).
const prestacao = valorVariavel + (valorVariavel * (taxaVariavel/100) * tempoVariavel)

if(Number.isInteger(tempoVariavel)){
    if(tempoVariavel == 0){
        alert('Valor inválido o tempo de atraso deve ser em dias.')
    }
    else{
        alert('O valor da prestação é: '+prestacao);
    }
}
else{
    alert('Valor inválido o tempo de atraso deve ser em dias.')
}




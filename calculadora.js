
const BotaoNumeros = document.querySelectorAll('.num');
const display = document.querySelector('.visor');
const botaoOperacao = document.querySelectorAll('.operador');
const Limpar = document.querySelector('.limpar');
const Igual = document.querySelector('.igual');

let valorAtual = 0;
let valorAnterior = "";
let operacaoEscolhida = "";
let calculoConcluido = false;

function MudarDisplay() {

     display.innerHTML = valorAtual;
}

BotaoNumeros.forEach((botaoClicado) => {

     botaoClicado.addEventListener('click', () => {

          const valor = botaoClicado.innerText;

          if (calculoConcluido){
            valorAtual = (valor === ".") ? "0" : "";
            calculoConcluido = false;
          }

          // === verifica se são do mesmo tipo e iguais
          if (valor === '.' && valorAtual.includes(".")) { //includes verifica se tem algum ponto guardado dentro do ponto!
               return;
          } 
          

          if (valorAtual === '0' && valor !== ".") {
               valorAtual = valor;
          } else {
               valorAtual += valor;
          }

          MudarDisplay();
     });
});

botaoOperacao.forEach((botaoClicado) => {


     botaoClicado.addEventListener('click', () => {

          operacaoEscolhida = botaoClicado.innerText;

          valorAnterior = valorAtual;

          valorAtual = 0;
     });
});




     Limpar.addEventListener('click', () => {
        
        valorAtual = 0;
        valorAnterior = '';
        operacaoEscolhida = '';

        MudarDisplay();

     });



     Igual.addEventListener('click', () => {

     const numAnterior = parseFloat(valorAnterior);
      const numAtual = parseFloat(valorAtual);

      if(isNaN(numAnterior) || isNaN(numAtual)){
          return;
      } 

      let result = 0;

      switch(operacaoEscolhida) {

        case "+":
         result = numAnterior + numAtual;
        break;

        case "-":
         result = numAnterior - numAtual;
        break;

        case "x":
         result = numAnterior * numAtual;
        break;

        case "/":
         result = numAnterior / numAtual;
        break;

        case "%":
         result = numAnterior % numAtual;
        break;
     
        default:
          return;
      }


      valorAtual = result.toString();
      operacaoEscolhida = "";
      valorAnterior = "";
      calculoConcluido = true;

      MudarDisplay();
     });

MudarDisplay();
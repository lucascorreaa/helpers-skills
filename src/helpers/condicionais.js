//Em  JavaScript nós utilizamos as conficionais de estado:

//      if => é uma condição de estado utilizado para verificar a veracidade de um bloco, ou seja, se este é verdadeiro.
//    else => se o bloco de código da condição if for falso, então, o bloco de código seguinte, com a condição else é executado.
// else if => utilizado para especificar uma nova condição de teste, se a condição if for falsa.
//  switch => para checar mais de uma condição no bloco de código.

//Exemplo com if e else
function checkParImpar(num) {
  if (num % 2 === 0) {
    console.log(num + "é um número par."); // se verdadeiro, o bloco de código é executado
  } else {
    console.log(num + "é um número ímpar."); //se a condição if for falsa, então, este bloco de código é executado.
  }
}

// Testando a função
checkParImpar(4); // Saída: 4 é um nmúmero par.
checkParImpar(7); // Saída : 7 é um número ímpar.
checkParImpar(0); // Saída: 0 é um número par.

// Exemplo com if, else if, else
function saudacao(hora) {
  if (hora >= 0 && hora < 12) {
    console.log("São " + hora + "h,Bom dia!");
  } else if (hora >= 12 && hora < 18) {
    console.log("São " + hora + "h, Boa Tarde!");
  } else if (hora >= 18 && hora <= 23) {
    console.log("São " + hora + "h, Boa Noite!");
  } else {
    console.log("Hora Inválida!");
  }
}

// Testando a função

saudacao(9); // Saída: Bom dia!
saudacao(14); // Saída: Boa tarde!
saudacao(22); // Saída: Bom noite!

// Exemplo com switch

function estacaoDoAno(mes) {
  switch (mes) {
    case 12:
    case 1:
    case 2:
      console.log("É Verão!");
      break;
    case 3:
    case 4:
    case 5:
      console.log("É Outono!");
      break;
    case 6:
    case 7:
    case 8:
      console.log("É Inverno!");
      break;
    case 9:
    case 10:
    case 11:
      console.log("É Primavera!");
      break;
    default:
      console.log("Mês Inválido!");
  }
}
//Testando a função
estacaoDoAno(1) //Saída: É verão!
estacaoDoAno(4) //Saída: É outona!
estacaoDoAno(7) //Saída: É inverno!
estacaoDoAno(10) //Saída: É primavera!

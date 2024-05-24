// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 10
const numberTwo = 15

const sum = numberOne + numberTwo

alert(sum)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 10

if (typeof isNumber == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

// 4.Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = "String"

if (typeof isString == 'string') {
  alert('É uma String')
} else {
  alert('Não é uma String')
}

// 5.Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBoolean = true

if (typeof isBoolean == 'boolean') {
  alert('É um boolean')
} else {
  alert('Não é um boolean')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const numberThree = 10
const numberFour = 5

alert(numberThree - numberFour)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const numberFive = 5
const numberSix = 6

alert(numberFive * numberSix)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const numberSeven = 10
const numberEight = 5

alert(numberSeven / numberEight)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const numberNine = 2
const total=numberNine/2;

if(numberNine%2 == 0){
	alert("É um número par");
}else{
	alert("Não é um número par");
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const numberTen = 5

if (numberTen % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}

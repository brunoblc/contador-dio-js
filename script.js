function exercDio () {
    let num1 = Number(prompt('Digite o numero: '));
    let num2 = Number(prompt('Digite o numero: '));

    if (num1 == num2) {
        alert(`Os números ${num1} e ${num2} são iguais`)
    }else{
        alert(`Os números ${num1} e ${num2} não são iguais`)
    }

    function somaNum (){
        soma = num1 + num2;

        if (soma > 10 && soma < 20) {
            alert(`Sua soma é ${soma} e é maior que 10 e menor que 20`);
        } else if (soma < 10 && soma < 20){
            alert(`Sua soma é ${soma} e é menor que 10 e menor que 20`);
        } else if (soma < 10 && soma > 20){
            alert(`Sua soma é ${soma} e é menor que 10 e maior que 20`);
        } else if(soma > 10 && soma > 20){
            alert(`Sua soma é ${soma} e é maior que 10 e maior que 20`);
        }
    }somaNum();
}

exercDio();

// var num1 = Number(prompt('Digite um número: '))
// var num2 = Number(prompt('Digite outro número: '))

// function comparaNumero (num1, num2) {
//     const primeiraFrase = criaPrimeiraFrase(num1, num2);
//     const segundaFrase = criaSegundaFrase(num1, num2)

//     return `${primeiraFrase} ${segundaFrase}`
// }



// function criaPrimeiraFrase(num1, num2) {
// let saoIguais = ``;

// if(num1 !== num2){
//     saoIguais = 'não'
// }

// alert(`Os numeros ${num1} e ${num2} ${saoIguais} são iguais`)
// }


// function criaSegundaFrase (num1, num2) {
//     const soma = num1 + num2;

//     let resultado10 = 'menor'
//     let resultado20 = 'menor'

//     const compara10 = soma > 10
//     const compara20 = soma > 20

//     if(compara10) {
//         resultado10 = 'maior'
//     }

//     if(compara20) {
//         resultado20 = 'maior'
//     }

//     alert(`Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`)
// }
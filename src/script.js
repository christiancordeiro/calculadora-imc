
const botao = document.querySelector('.container .botao')

function calculoIMC(){
    const nome = document.querySelector('.itens .nome').value;
    const altura = parseFloat(document.querySelector('.itens .altura').value);
    const peso = parseFloat(document.querySelector('.itens .peso').value);
    const imc = peso / (altura ** 2)

    if(nome == '' || altura == '' || peso == ''){
        window.alert('Preencha tudo!')
    }
    else {let classificacao = ''
    if(imc < 18.5){
        classificacao = 'Você abaixo do peso'
    } else if (imc < 24.9){
        classificacao = 'Você está com peso ideal'
    } else if (imc < 29.9){
        classificacao = 'Você está levemente acima do peso'
    } else if (imc < 39.9){
        classificacao = 'Você está com obesidade grau I'
    } else if (imc > 40){
        classificacao = 'Você está com obesidade grau II'
    }
    const resultadoElement = document.querySelector('.resultado .h2');
    resultadoElement.innerHTML = `${nome}, seu IMC é: ${imc.toFixed(1)}. ${classificacao}`;
}
}


document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
      calculoIMC();
    }
  })

botao.addEventListener('click', () => {
    calculoIMC()
})
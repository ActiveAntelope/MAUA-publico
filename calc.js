function soma(x,y){
    return x + y
}

const subtracao = (x,y) => x - y

const multiplicacao = function (x,y){
    return x * y
}

function executar(operacao, x,y){
    return operacao(x,y)
}

console.log(soma(2,3))
console.log(subtracao(2,3))
console.log(multiplicacao(2,3))
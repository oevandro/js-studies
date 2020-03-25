//REST
const usuario = {
    nome: 'Evandro',
    idade: 33,
    empresa: 'Teste'
}
const { nome, ...resto } = usuario;
console.log(resto)

const arr = [1,2,3,4]
const [a, b, ...c] = arr
console.log(a,b,c)

function soma(...params){
    return params.reduce((total, next) => total + next)
}
console.log(soma(1,2,3,4,5,6,7,8,9))

function soma2(a, b, ...params){
    return params
}
console.log(soma2(1,2,3,4,5,6,7,8,9))

//SPREAD
const usuario2 = { ...usuario, nome: 'Souza' }
console.log(usuario2)

//mutacao
const data = { nome: 'TESTE'}
data.nome = 'TESTE 2'
console.log(data)

//escopo
function teste(x){
    let y = 2
    if(x>5){
        console.log(x,y);
    }
}
console.log(y);
teste(10)
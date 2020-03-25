const usuario = {
    nome: 'Evandro',
    idade: 33,
    endereco: {
        cidade: 'Sorocaba',
        estado: 'SP',
    }
}

const { nome, idade, endereco: { cidade } } = usuario
console.log(nome, idade, cidade)

function mostraDados({ nome, idade}){
    console.log(nome, idade)
}

mostraDados(usuario)
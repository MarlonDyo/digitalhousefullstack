
let pets = [
  {
    nome: "bob",
    tipo: 'gato',
    sexo: 'f',
    raca: 'yorkshire',
    idade: 10,
    peso: 6.5,
    dono: {
      nome: 'Fabricio',
      cpf: '410.000.000-99',
    },
    vacinado: true,
    servicos: [
      {
        tipo: 'tosa',
        encerrado: true,
      },
    ],
  },
  {
    nome: "totó",
    tipo: 'cachorro',
    sexo: 'm',
    raca: 'yorkshire',
    idade: 10,
    peso: 6.5,
    dono: {
      nome: 'Fabricio',
      cpf: '410.000.000-99',
    },
    vacinado: false,
    servicos: [
      {
        tipo: 'tosa',
        encerrado: true,
      },
    ],
  }
]

console.log('Digital House aula 02')
console.log(pets[1])

function print1(pets) {

  var i = 0
  while (i < pets.length) {
    var sexoString = pets[i].sexo === "m" ? "Macho" : "Fêmea"
    console.log('nome: ', pets[i].nome, '| sexo: ', sexoString)
    i+=1
  }
}

function vacinar(index) {
  if (index < 0 || index >= pets.length) {
    console.log('indice inválido')
    return
  }
  if (pets[index].vacinado === true) {
    console.log('pet já está vacinado')
    return
  }
  pets[index].vacinado = true
  console.log('pet vacinado com sucesso')
    
}

print1(pets)

vacinar(1)
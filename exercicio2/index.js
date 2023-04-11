let nomeV = prompt('Digite o nome da pessoa mais velha')
let idadeV = prompt('Digite a idade da pessoa mais velha')

let nomeN = prompt('Digite o nome da pessoa mais nova')
let idadeN = prompt('Digite a idade da pessoa mais nova')

let dIdades = idadeV - idadeN

alert(
  'nome da pessoa mais velha ' +
    nomeV +
    '\n ' +
    '' +
    idadeV +
    ' anos de idade' +
    '\n' +
    'nome da pessoa mais nova ' +
    nomeN +
    ' ' +
    idadeN +
    ' anos de idade' +
    '\n a diferenca de idade é ' +
    dIdades
)

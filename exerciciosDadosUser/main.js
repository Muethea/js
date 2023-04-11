alert('Bem vindo! A seguir pediremos que informe alguns dados')

const nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')
let idadeConfirmar = prompt(`Confirme sua idade`)

if (idadeConfirmar != idade) {
  alert('Idade diferente por favor verifique e tente novamente')
} else {
  alert(
   `O nome do utilizadro ${nome} a idade digitada ${idade} a confirmacao da idade ${idadeConfirmar}`
  )
}

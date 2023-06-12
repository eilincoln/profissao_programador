// prototypes 

function Game() {
  this.pulou = () => alert('O personagem pulou')
  this.deitou = () => alert('O personagem deitou')
}

Game.prototype.correu = () => alert('ele correu')

const novo_jogo = new Game()

// console.log(novo_jogo)

const meu_jogo = 'fifa'
console.log(meu_jogo.toLocaleUpperCase()) // para deixar tudo em capslock
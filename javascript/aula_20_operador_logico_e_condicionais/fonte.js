//são os que estão diretamente ligado com a formação lógica do código

// && -> and

// || -> or

// ! -> not

const idade = 22
const tipo = 'admin'


//no AND, todos tem que ser verdadeiro para poder funcionar
if(idade > 29 && tipo == 'admin') {
  console.log(`Ele tem mais de 29 anos e é um ADM USANDO AND`)
} else if(idade > 25){
  console.log(`Ele tem mais de 25 anos e é um ADM USANDO AND`)
} else {
  console.log('Não tem idade minima')
}




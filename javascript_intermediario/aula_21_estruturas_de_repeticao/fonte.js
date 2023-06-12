//aqui funciona direto na function o mais normal de todos
function function_declaration(nome){
  console.log('function declaration', nome)
}
function_declaration('lincoln')


//aqui eu coloco a function dentro de uma variavel
const function_expression = function(nome){
  console.log('function_expression', nome)
}
function_expression('lincoln')

//Arrow Function, um jeito mais curto de escrever
const arrow_function = (name) => {
  console.log('arrow function', name)
}
arrow_function('kamilly')

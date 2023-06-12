// é uma função que retorna um objeto 
// Factory Function

const factory_function = (name) => {
  return {
    logou: () => alert(`O susuário ${name} logou`),
    deslogou: () => alert(`O susuário ${name} deslogou`)
  }
}
factory_function('Lincoln').logou()
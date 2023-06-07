class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Meu Erro";
  }
}
class Estudante {
  constructor(nome, idade, turma) {
    this.nome = nome
    this.idade = idade
    this.turma = turma
  }

  mostrarAtributos() {
    return this.atributos()
  }

  atributos() {
    if (this.nome == "" &&  this.idade == "" && this.turma == "") {

    return {
      nome: this.nome,
      idade: this.idade,
      turma: this.turma
      }
    } else{
      throw new MeuErro('Todos os atributos são obrigatórios.')
    } 
  }
}

  const estudante = new Estudante("", 16, "3A")

  const atributos = estudante.mostrarAtributos()
  console.log(estudante.atributos())
  // console.log(atributos.nome)
  // console.log(atributos.idade)
  // console.log(atributos.turma)

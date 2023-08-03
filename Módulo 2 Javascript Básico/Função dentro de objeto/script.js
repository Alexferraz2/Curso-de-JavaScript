let aluno = {
    nome: "Alexsandro",
    sobrenome: "Leandro",
    Idade: 20,
    notas: {
        Nota1: 8.5,
        Nota2: 7.6,
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`
    }
    
    
}

console.log(aluno.nomeCompleto())
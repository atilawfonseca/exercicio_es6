
const Aluno = require('./aluno');

function ChamarAlunoAprovado(arrayAlunos){
    let alunosAprovados = arrayAlunos.map((aluno)=> {
        if(aluno.getNota()>6) {
            return aluno.getNome();
        }
    })
    //cria um novo array com uma lista sem os undefineds
    return alunosAprovados.filter((aluno)=> aluno !== undefined);
}
function AlunosReprovados(arrayAlunos) {
    let alunosreprovado = arrayAlunos.map((aluno)=> {
        if(aluno.getNota()<6) {
            return aluno.getNome();
        }
    })
    //cria um novo array com uma lista sem os undefineds
    return alunosreprovado.filter((aluno)=> aluno !== undefined);
}

let arrayAlunos = [];
const pedro = new Aluno('Pedro', 8);
arrayAlunos.push(pedro);
const maria = new Aluno('Maria', 5);
arrayAlunos.push(maria);
const joao = new Aluno('Joao', 7);
arrayAlunos.push(joao);
const marco = new Aluno('Marco', 8);
arrayAlunos.push(marco);
const atila = new Aluno('Atila', 9);
arrayAlunos.push(atila);
const alex = new Aluno('Alex', 7);
arrayAlunos.push(alex);
const benedito = new Aluno('Benedito', 5);
arrayAlunos.push(benedito);

console.log("Alunos aprovados: ");
console.log(ChamarAlunoAprovado(arrayAlunos));

console.log("Alunos reprovados: ");
console.log(AlunosReprovados(arrayAlunos));
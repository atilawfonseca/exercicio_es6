function Aluno(nomeAluno, notaAluno){
    let _nome = nomeAluno; 
    let _nota = notaAluno; 

    this.getNota = function(){
        return _nota; 
    }
    this.setNota = function(novaNota) {
        _nota = novaNota; 
    }

    this.getNome = function() {
        return _nome; 
    }
    this.setNome = function(novoNome) {
        _nome = novoNome; 
    }
}


module.exports = Aluno; 

function pessoa (){
    this.idade = 0

    const self = this
    setInterval(function(){//Função setInterval um temporizador
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000) ///bind this para que o 'this' apontasse para o objeto pessoa
}

new pessoa
// Factory function (Funçao fabrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
       nome, 
       sobrenome,

       // Getter
       get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
       },

       //Setter
       set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
        console.log(valor);
       },


       fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
       },

       altura: altura,
       peso: peso,

       // Getter
       get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
       }
    };
}

const p1 = criaPessoa('Yuri', 'Candido', 1.9, 95);
p1.nomeCompleto = 'Maria Oliveira silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

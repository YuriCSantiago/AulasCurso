// Superclass
// funçao construtora
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/C: ${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`); //toFixed casas decimais
};

/* const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(35); 
*/

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);

}

CP.prototype = Object.create(Conta.prototype);
CP.constructor = CP;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log('Quebrar linha')


const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);

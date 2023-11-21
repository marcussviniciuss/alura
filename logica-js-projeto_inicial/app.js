alert('Bem-vindo ao JS Game');

let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let numeroEscolhido;
let tentativas = 1;

// enquanto
while (numeroEscolhido != numeroSecreto){
    numeroEscolhido = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroEscolhido == numeroSecreto ){
        break
    } else if (numeroEscolhido < numeroSecreto) {
        alert(`O número secreto é maior do que o número escolhido (${numeroEscolhido})`);
    } else if (numeroEscolhido > numeroSecreto) {
        alert(`O número secreto é menor do que o número escolhido (${numeroEscolhido})`);
    }
    //tentativas = tentativas + 1;
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você acertou o numero secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);

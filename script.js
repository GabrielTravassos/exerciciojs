let nome = prompt ("digite seu nome completo");

console.log(`o nome digitado foi ${nome}`);

alert(`parabens, ${nome}! seu nome foi cadastrado`);

let idade = prompt ("digite sua idade");
let renda = prompt ("digite sua renda");
let emp = Number( prompt("digite o valor do emprestimo"));

if(emp < renda * 20 && (renda > 1500 && (idade > 21 && idade < 60))){
    console.log("emprestimo aprovado");
}

else{
    console.log("emprestimo recusado");
}



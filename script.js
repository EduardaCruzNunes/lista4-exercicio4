var salarioDoHabitante = 0;
var numeroDeFilhosDoHabitante = 0;
var salarios = [];
var salariosNumber = [];
var filhos = [];
var salarioTotal = 0;
var filhosTotal = 0;
var mediaDoSalario = 0;
var max = 0;
var mediaDeFilhos = 0;
var parar = '';
var inferiorAmil = 0;

while (parar != 'sim') {
    salarioDoHabitante = prompt('Digite o salário do habitante:');
    numeroDeFilhosDoHabitante = prompt('Digite a quantidade de filho do habitante:');
    parar = prompt('Deseja parar, digite sim:');
    salarios.push(salarioDoHabitante);
    filhos.push(numeroDeFilhosDoHabitante);
}
for (let i = 0; i < salarios.length; i++) {
    const element = salarios[i];
    salarioTotal = salarioTotal + element * 1;
    if(element < 1000){
        inferiorAmil = inferiorAmil + 1;
    }
}

mediaDoSalario = salarioTotal / salarios.length;
console.log(`A média total do salário dos habitantes é : ${mediaDoSalario}`);

salariosNumber = salarios.map(Number);
max = Math.max(...salariosNumber);
console.log(max, 'É o maior salário dos habitantes!');

for (let i = 0; i < filhos.length; i++) {
    const element = filhos[i];
    filhosTotal = filhosTotal + element * 1;
}

mediaDeFilhos = filhosTotal / filhos.length;
console.log(`A média total de filhos dos habitantes é : ${mediaDeFilhos}`);
console.log(`O percentual de salário inferior a mil é : ${inferiorAmil * 100 / salarios.length}`);

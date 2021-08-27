const cap5 = [];

module.exports = { cap5 };

cap5.push(`
// Cap.5 Objeto
// Criação de Objetos

const objPessoa = {
    nome: "Felícia",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Fe", "Feli", "Lilica"]
};

console.log(objPessoa);
`);

cap5.push(`
// Cap.5 Objeto
// Acessando Objetos

const objPessoa = {
    nome: "Felícia",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Fe", "Feli", "Lilica"]
};

const varBusca = "nome";

console.log('Bem-vinda ' + objPessoa.nome);
console.log('Bem-vinda ' + objPessoa["nome"]);
console.log('Bem-vinda ' + objPessoa[varBusca]);

`);

cap5.push(`
// Cap.5 Objeto
// Extendendo um objeto
const objPessoa = {
    nome: "Felícia",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Fe", "Feli", "Lilica"]
};

const cnh = objPessoa.temCNH ? "tem" : "não tem";

let apelidos = "";
for (const i of objPessoa.apelidos) {
    apelidos += i + ", ";
}

console.log(objPessoa.nome + ' tem ' + objPessoa.idade);
console.log(objPessoa.altura + ' + cm de altura');
console.log('E os apelidos: ' + apelidos);
`);

cap5.push(`
// Cap.5 Objeto
// Mais formas de manipular o objeto
const objPessoa = {
    nome: "Giu",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Giu", "Giulia", "Giuli"]
};

objPessoa.peso = 70;
objPessoa.nome = "Giuliana"
objPessoa["idade"] = 21;
const prop = "altura";
objPessoa[prop] = 1.70;
objPessoa.apelidos[0] = "Giuza";
objPessoa.apelidos.push("Giugiu", "Gi");
objPessoa.teste = "Será apagado";
delete objPessoa.teste;

const cnh = objPessoa.temCNH ? "tem" : "não tem";
let apelidos = "";
for (const i of objPessoa.apelidos) {
    apelidos += i + ",";
}

console.log(objPessoa);

// Deletando uma propriedade. Cuidado, essa operação é mais lenta do que setar para null, "", 0 etc
objPessoa.teste = "Será apagado";
delete objPessoa.teste;

console.log(objPessoa);
`);

cap5.push(`
// Cap.5 Objeto
// Objeto dentro de objeto
const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2017,
    potencia: 800,
};

const objPessoa = {
    nome: "Giu",
    idade: 41,
    altura: 1.74,
    temCNH: true,
    apelidos: ["Giu", "Giulia", "Giuli"],
    carro // coloca o valor como uma variáva assim carro: carro, pode ser usado dessas formas ou digitando o objeto diretamente
};

console.log(objPessoa);

`);
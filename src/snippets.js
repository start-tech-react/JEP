const snippets = [`
// Explorando o console
console.log(console);`];

snippets.push(`
// Cap.1 Tipos
// Strings
console.log('Strings', "Eu sou uma string");
`);

snippets.push(`
// Cap.1 Tipos
// Números
console.log('Inteiros', 122);
`);

snippets.push(`
// Cap.1 Tipos
// Números fracionários
console.log('Frações', 1/3);
`);

snippets.push(`
// Cap.1 Tipos
// Notações científicas x 10 ** 3
console.log('Número Notação 2.998e3', 2.998e3);
`);

snippets.push(`
// Cap.1 Tipos
// Notações hexa
console.log('Número Hexadecima 0xC8', 0xC8);
`);

snippets.push(`
// Cap.1 Tipos
// Notações hexa
console.log('Número Hexadecima', 0xC8);
`);

snippets.push(`
// Cap.1 Tipos
// Undefined
let variavel;
console.log('Undefined', variavel);
`);

snippets.push(`
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Soma de a + b', a + b);
`);

snippets.push(`
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Subtração de a - b', a - b);
`);

snippets.push(`
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Multiplicação de a * b', a * b);
`);

snippets.push(`
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Divisão de a / b', a / b);
`);

snippets.push(`
// Cap.1 Operadores Aritiméticos
const a = 8;
const b = 3;
console.log('Módulo ou resto: a % b', a % b);
`);

snippets.push(`
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Exponenciação de a ** b', a ** b);
`);

snippets.push(`
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 1/2; // 1/2 é raíz quadrada
console.log('Radiciação de a ** b', a ** b);
`);

snippets.push(`
// Cap.1 Operadores Aritiméticos unários
const a = 5;
const b = 6;
console.log('Invertido sinal -()', -(a - b));
`);

snippets.push(`
// Cap.1 Operações com Strings
const a = "con" + "cat" + "e" + "nate";
console.log('Concatenação', a);
`);

// eslint-disable-next-line no-template-curly-in-string
snippets.push('// Cap.1 Operações com Strings\nconst a = "um texto";\nconst b= `vou inserir ${a} aqui.`;\nconsole.log("Concatenação", b);');

snippets.push(`
// Cap.1 Operações com Strings

// Typeof produz uma string contendo
// o nome do tipo do item verificado
let a;
const b = null;
const c = 0/0;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof 4);
console.log(typeof 4.33);
console.log(typeof "texto");
`);

snippets.push(`
// Cap.1 Booleanos Valores Truthy 

console.log('true', true ? 1 : 0);
console.log('{}', {} ? 1 : 0);
console.log('[]', [] ? 1 : 0);
console.log('new Date()', new Date() ? 1 : 0);
console.log('-42', -42 ? 1 : 0);
console.log('3.14', 3.14 ? 1 : 0);
console.log('Infinity', Infinity ? 1 : 0);
console.log('-Infinity', -Infinity ? 1 : 0);
console.log('new Boolean()', new Boolean(false) ? 1 : 0);
`);

snippets.push(`
// Cap.1 Booleanos Valores Falsy 

console.log('false', false ? 1 : 0);
console.log('null', null ? 1 : 0);
console.log('undefined', undefined ? 1 : 0);
console.log('0', 0 ? 1 : 0);
console.log('-0', -0 ? 1 : 0);
console.log('NaN', NaN ? 1 : 0);
console.log('', '' ? 1 : 0);
`);

snippets.push(`
// Cap.1 Comparações Maior que

console.log('5 > 3', 5 > 3);
console.log('"1" > 1', "1" > 1);
console.log('undefined > 0', undefined > 0);
console.log('"JEP" > "JEP"', "JEP" > "JEP");
console.log('"A" > "B"', "A" > "B");
console.log('1.00001 > 1', 1.00001 > 1);
console.log('NaN > NaN', NaN > NaN);
console.log('undefined > NaN', undefined > NaN);
`);

snippets.push(`
// Cap.1 Comparações Menor que

console.log('5 < 3', 5 < 3);
console.log('"1" < 1', "1" < 1);
console.log('undefined < 0', undefined < 0);
console.log('"JEP" < "JEP"', "JEP" < "JEP");
console.log('"A" < "B"', "A" < "B");
console.log('1.00001 < 1', 1.00001 < 1);
console.log('NaN < NaN', NaN < NaN);
console.log('undefined < NaN', undefined < NaN);
`);

snippets.push(`
// Cap.1 Comparações Igualdade de valor

console.log('5 == 3', 5 == 3);
console.log('"1" == 1', "1" == 1);
console.log('undefined == 0', undefined == 0);
console.log('"JEP" == "JEP"', "JEP" == "JEP");
console.log('"A" == "B"', "A" == "B");
console.log('1.00001 == 1', 1.00001 == 1);
console.log('NaN == NaN', NaN == NaN);
console.log('undefined == NaN', undefined == NaN);
console.log('null == undefined', null == undefined);
console.log('0 == undefined', 0 == undefined);
`);

snippets.push(`
// Cap.1 Comparações Igualdade de valor e tipo

console.log('5 === 5', 5 === 5);
console.log('"1" === 1', "1" === 1);
console.log('undefined === 0', undefined === 0);
console.log('"JEP" === "JEP"', "JEP" === "JEP");
console.log('"A" === "B"', "A" === "B");
console.log('1.00000 === "1"', 1.00000 === "1");
console.log('NaN === NaN', NaN === NaN);
console.log('undefined === NaN', undefined === NaN);
console.log('null === undefined', null === undefined);
console.log('0 === undefined', 0 === undefined);
`);

snippets.push(`
// Cap.1 Comparações Negado

console.log('5 !== 5', 5 !== 5);
console.log('"1" != 1', "1" != 1);
console.log('"JEP" === "JEP"', "JEP" !== "JEP");
console.log('1.00000 === "1"', 1.00000 != "1");
`);

snippets.push(`
// Cap.1 Comparações Negado

console.log('5 !== 5', 5 !== 5);
console.log('"1" != 1', "1" != 1);
console.log('"JEP" === "JEP"', "JEP" !== "JEP");
console.log('1.00000 === "1"', 1.00000 != "1");
`);

snippets.push(`
// Cap.1 Operadores Lógicos

console.log('5 !== 5', 5 !== 5);
console.log('"1" != 1', "1" != 1);
console.log('"JEP" === "JEP"', "JEP" !== "JEP");
console.log('1.00000 === "1"', 1.00000 != "1");
`);

snippets.push(`
// Cap.1 Operadores Lógicos

console.log('5 !== 5', true && false);
console.log('"1" != 1', "1" != 1);
console.log('"JEP" === "JEP"', "JEP" !== "JEP");
console.log('1.00000 === "1"', 1.00000 != "1");
`);

const categories = [
    'Cap.1',
    'Cap.1 Tipos',
    'Cap.1 Operadores Aritiméticos',
    'Cap.1 Operações com Strings',
    'Cap.1 Booleanos Valores Truthy',
    'Cap.1 Booleanos Valores Falsy',
    'Cap.1 Comparações',
    'Cap.1 Comparações',
];

module.exports = { snippets, categories };
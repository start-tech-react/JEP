const cap = [{
    snippet: `
// Explorando o console
console.log(console);`,
    exercicio: 'variables_string',
    mdn: 'API/Console/log'
}
];

cap.push({
    snippet: `
// Console table
const obj = [
    {name: "Felicia", idade:33 },
    {name: "Gelia", idade:27},
    {name: "Carla", idade:15}
];
console.table(obj);
`,
    exercicio: '',
    mdn: 'Web/API/Console/table'
});

cap.push({
    snippet: `
// Cap.1 Tipos
// Strings
console.log('Strings', "Eu sou uma string");
`,
    exercicio: 'variables_string',
    mdn: 'Web/API/Console/log'
});

cap.push({
    snippet: `
// Cap.1 Tipos
// Números
console.log('Inteiros', 122);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Number'
});

cap.push({
    snippet: `
// Cap.1 Tipos
// Números fracionários
console.log('Frações', 1/3);
`,
    exercicio: '',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.1 Tipos
// Notações científicas x 10 ** 3
console.log('Número Notação 2.998e3', 2.998e3);
`,
    exercicio: '',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.1 Tipos
// Notações hexa
console.log('Número Hexadecima 0xC8', 0xC8);
`,
    exercicio: '',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.1 Tipos
// Notações hexa
console.log('Número Hexadecima', 0xC8);
`,
    exercicio: '',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.1 Tipos
// Undefined
let variavel;
console.log('Undefined', variavel);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/undefined'
});

cap.push({
    snippet: `
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Soma de a + b', a + b);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Subtração de a - b', a - b);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Multiplicação de a * b', a * b);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Divisão de a / b', a / b);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Aritiméticos
const a = 8;
const b = 3;
console.log('Módulo ou resto: a % b', a % b);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 3;
console.log('Exponenciação de a ** b', a ** b);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Aritiméticos
const a = 5;
const b = 1/2; // 1/2 é raíz quadrada
console.log('Radiciação de a ** b', a ** b);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Aritiméticos unários
const a = 5;
const b = 6;
console.log('Invertido sinal -()', -(a - b));
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operações com Strings
const a = "con" + "cat" + "e" + "nate";
console.log('Concatenação', a);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

// eslint-disable-next-line no-template-curly-in-string
cap.push({ snippet: '// Cap.1 Operações com Strings\nconst a = "um texto";\nconst b= `vou inserir ${a} aqui.`;\nconsole.log("Concatenação", b);', exercicio: '', msn: '' });

cap.push({
    snippet: `
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
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators/typeof'
});

cap.push({
    snippet: `
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
`,
    exercicio: '',
    mdn: 'Glossary/Truthy'
});

cap.push({
    snippet: `
// Cap.1 Booleanos Valores Falsy 
console.log('false', false ? 1 : 0);
console.log('null', null ? 1 : 0);
console.log('undefined', undefined ? 1 : 0);
console.log('0', 0 ? 1 : 0);
console.log('-0', -0 ? 1 : 0);
console.log('NaN', NaN ? 1 : 0);
console.log('', '' ? 1 : 0);
`,
    exercicio: '',
    mdn: 'Glossary/Falsy'
});

cap.push({
    snippet: `
// Cap.1 Comparações Maior que
console.log('5 > 3', 5 > 3);
console.log('"1" > 1', "1" > 1);
console.log('undefined > 0', undefined > 0);
console.log('"JEP" > "JEP"', "JEP" > "JEP");
console.log('"A" > "B"', "A" > "B");
console.log('1.00001 > 1', 1.00001 > 1);
console.log('NaN > NaN', NaN > NaN);
console.log('undefined > NaN', undefined > NaN);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Comparações Menor que
console.log('5 < 3', 5 < 3);
console.log('"1" < 1', "1" < 1);
console.log('undefined < 0', undefined < 0);
console.log('"JEP" < "JEP"', "JEP" < "JEP");
console.log('"A" < "B"', "A" < "B");
console.log('1.00001 < 1', 1.00001 < 1);
console.log('NaN < NaN', NaN < NaN);
console.log('undefined < NaN', undefined < NaN);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
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
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
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
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Comparações Negado
console.log('5 !== 5', 5 !== 5);
console.log('"1" != 1', "1" != 1);
console.log('"JEP" === "JEP"', "JEP" !== "JEP");
console.log('1.00000 === "1"', 1.00000 != "1");
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Comparações Negado
console.log('5 !== 5', 5 !== 5);
console.log('"1" != 1', "1" != 1);
console.log('"JEP" === "JEP"', "JEP" !== "JEP");
console.log('1.00000 === "1"', 1.00000 != "1");
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Lógicos
console.log('5 !== 5', 5 !== 5);
console.log('"1" != 1', "1" != 1);
console.log('"JEP" === "JEP"', "JEP" !== "JEP");
console.log('1.00000 === "1"', 1.00000 != "1");
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Operadores Lógicos
console.log('5 !== 5', true && false);
console.log('"1" != 1', "1" != 1);
console.log('"JEP" === "JEP"', "JEP" !== "JEP");
console.log('1.00000 === "1"', 1.00000 != "1");
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

cap.push({
    snippet: `
// Cap.1 Resumo
// em breve
console.log('ok');
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators'
});

module.exports = { cap };
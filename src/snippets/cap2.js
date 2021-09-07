const cap = [{
    snippet: `
// Cap.2 Escopos
let result = 1;
{
    result = 2; //puxa pra cima
}
console.log(result);
`,
    exercicio: '',
    mdn: 'Glossary/Scope'
}
];

cap.push({
    snippet: `
// Cap.2 Escopos
let result = 1;
{
    let result = 2; // só existe aqui
}
console.log(result);
`,
    exercicio: '',
    mdn: 'Glossary/Scope'
});

cap.push({
    snippet: `
// Cap.2 Escopos
let result = 1;
{
    result = 2;
    {
        result = 3;
        { 
            let result = 4;
        }
    }
}
console.log(result);
`,
    exercicio: '',
    mdn: 'Glossary/Scope'
});

cap.push({
    snippet: `
// Cap.2 Escopos
{
    let result = 11;
}

console.log(typeof result);
`,
    exercicio: '',
    mdn: 'Glossary/Scope'
});

cap.push({
    snippet: `
// Cap.2 Escopos
{
    const result = 33;
}

console.log(typeof result);
`,
    exercicio: '',
    mdn: 'Glossary/Scope'
});

cap.push({
    snippet: `
// Cap.2 Funções
// Sem parametros com retorno
function foo () {
    return 'Teste';
}

console.log(foo());
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Funções
// Com parametros sem retorno
function foo (param) {
    console.log(param);
}
foo("Teste2");
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Funções
// Confirmação nativa
console.log(confirm("Vamos nessa?"))
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Funções
// Requisição nativa
console.log(prompt("Digite", "Algo"))
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Funções
// Aviso nativo
console.log(alert("Você clicou em executar..."))
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Funções
// Interação
const num = prompt("Digite um número");
console.log(alert('O quadrado de '+num+" é "+num**2));
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Funções Recursivas Loop
function foo (vezes, atual) {
    if (atual < vezes) {
        atual++;
        console.log(atual)
        foo (vezes, atual);
    } else {
      return atual;  
    }
    //reveso
    //console.log(atual)
}
foo(5,0);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Funções
// Arrow Function =>
const a = () => 5 * 8;
console.log(a());
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Funções
// Arrow Function =>
const a = () => {
   let b = 5 * 9;
   return b;
};
console.log(a());
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Global_Objects/Function'
});

cap.push({
    snippet: `
// Cap.2 Execução Condicional
if (5==5) console.log("Yes");
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/if...else'
});

cap.push({
    snippet: `
// Cap.2 Execução Condicional
if (5==5 || 4 > 3 || 5 < 7) 
    console.log("Yes2");
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/if...else'
});

cap.push({
    snippet: `
// Cap.2 Execução Condicional If
if (5==5) {
    console.log("Yes3")
};
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/if...else'
});

cap.push({
    snippet: `
// Cap.2 Execução Condicional If Else
if (variable == "value1") console.log('1 if');
else if (variable == "value2") console.log('elseif1');
else if (variable == "value3") console.log('elseif2');
else console.log('else');;
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/if...else'
});

cap.push({
    snippet: `
// Cap.2 Execução Condicional
// Ternário
(5==5 || 4 > 3 || 5 < 7) ?
    console.log("Yes4") :
    console.log("Nooo");
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Operators/Conditional_Operator'
});

cap.push({
    snippet: `
// Cap.2 Loops While e Do
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/while'
});

cap.push({
    snippet: `
// Cap.2 Loops While e Do
let cont = 0
do {
    cont++;
    console.log(cont);
} while (cont < 6);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/do...while'
});

cap.push({
    snippet: `
// Cap.2 Loops for
for (var i = 0; i <= 12; i = i + 2)
  console.log(i);
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/for'
});

cap.push({
    snippet: `
// Cap.2 Loops for
for (var i = 0; i <= 12; i = i + 2) {
   console.log(i); 
}
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/for'
});

cap.push({
    snippet: `
// Cap.2 Loops for com break
for (var i = 10; ; i++) {
    console.log(i)
    if (i % 7 == 0)
      break;
}
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/break'
});

cap.push({
    snippet: `
// Cap.2 Loops Exemplo
const rna = "UGGUGUUAUUAAUGGUUU";
const codons = [];
for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna[i] + rna[i + 1] + rna[i + 2]);
}
console.log(codons.join('|'));
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/for'
});

cap.push({
    snippet: `
// Cap.2 Atualização Sucinta
let a = 5;
a++;
console.log(a);
a--;
console.log(a);
a += 5;
console.log(a);
a -= 5;
console.log(a);
`,
    exercicio: '',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.2 Atualização Sucinta
let a = 5;
a *= 2;
console.log(a);
a /= 5;
console.log(a);
a **= 2;
console.log(a);
`,
    exercicio: '',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.2 Condicional Switch
switch (prompt("Como está?")) {
    case "feliz":
      console.log("Ah, que bom!");
      break;
    case "triste":
      console.log("Que peninha...");
      break;
    default:
      console.log("Não entendi");
      break;
  }
`,
    exercicio: '',
    mdn: 'Web/JavaScript/Reference/Statements/switch'
});

module.exports = { cap };
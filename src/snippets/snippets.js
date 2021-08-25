const snippets = [];
for (let i = 1; i <= 2; i++) {
    const { snippetsCap } = require("./cap" + i);
    snippets.push(...snippetsCap);
}

const categories = [
    'Cap.1',
    'Cap.1 Tipos',
    'Cap.1 Operadores Aritiméticos',
    'Cap.1 Operações com Strings',
    'Cap.1 Booleanos Valores Truthy',
    'Cap.1 Booleanos Valores Falsy',
    'Cap.1 Comparações',
    'Cap.1 Resumo',
    'Cap.2 Escopos',
    'Cap.2 Funções',
    'Cap.2 Execução Condicional',
    'Cap.2 Condicional Switch',
    'Cap.2 Loops',
    'Cap.2 Atualização Sucinta',
];

module.exports = { categories, snippets };
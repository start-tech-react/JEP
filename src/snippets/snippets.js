// Capítulos
const snippets = [];
for (let i = 1; i <= 2; i++) {
    const { snippetsCap } = require("./cap" + i);
    snippets.push(...snippetsCap);
}

module.exports = { snippets };
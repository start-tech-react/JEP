// Capítulos
const snippets = [];
const { snippetsCap: cap1 } = require("./cap1");
snippets.push(...cap1);
const { snippetsCap: cap2 } = require("./cap2");
snippets.push(...cap2);

module.exports = { snippets };
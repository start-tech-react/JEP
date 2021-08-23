const snippets = [
    "console.log('teste');",
    "console.log(5 + 7);",
    "console.log(5 + 7);",
    "console.log(5 + 7);",
    "const a = 5 \nconsole.log(a + 7);",
];

snippets.push(`
    console.log(5 + 7);
`);

snippets.push(`
    console.log('teste');
`);

module.exports = { snippets };
const snippets = [
    "console.log('teste');",
    "console.log(5 * 7);",
    "console.log(5 / 7);",
    "console.log(5 ** 2);",
    "const a = 5 \nconsole.log(a + 7);",
];

snippets.push(`
    console.log(25 ** 0.5);
`);

snippets.push(`
    console.log('teste');
`);

snippets.push(`
    console.log('start tech teste');
`);

module.exports = { snippets };
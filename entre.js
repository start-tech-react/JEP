const ehEntre = (a, v, b) => {
    return v > a && v < b;
};

const variavel = 5;

if (variavel > 3 && variavel < 7) {
    console.log('Sim');
}

if (ehEntre(3, variavel, 7)) {
    console.log('Sim');
}

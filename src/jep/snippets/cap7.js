const cap = [{
    snippet: `
// Cap.7 CallBack
const multBy = (x) => x * x;
const elevBy = (x) => x * x;

const mostraResult = (callcack, args) => {
    console.log(callback(args));
}

mostraResult(multBy, 5);
mostraResult(elevBy, 5);
`,
    exercicio: '',
    mdn: ''
}
];

cap.push({
    snippet: `
// Cap.7 CallBack
const Erla = function (valor) {
  this.valor = valor;
  this.mostraResult = (callback) => {
    if (typeof callback != 'function') return 0;
    console.log(callback(this.valor));
  }
}

const erla1 = new Erla(5);
erla1.mostraResult(x => x * 5);

    `,
    exercicio: '',
    mdn: ''
});

module.exports = { cap };
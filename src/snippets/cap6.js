const cap = [{
    snippet: `
// Cap.6 Classes
// Constructor
class Pessoa {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

}
const charles = new Pessoa('Charles', 40, 1.74);
const carlos = new Pessoa('carlos', 19, 1.55);
console.log(charles, charles.nome);
console.log(carlos, carlos.nome);

`,
    exercicio: '',
    mdn: ''
}
];

cap.push({
    snippet: `
// Cap.6 Classes
// Get e Set
class Quadrado {
  constructor(lado) {
    this.altura = lado;
    this.largura = lado;
  }

  get area () {
    return this.altura * this.largura;
  }

  set area (area) {
    const lado = area ** 0.5;
    this.altura = lado;
    this.largura = lado;
  }

}

const quad = new Quadrado(10);
console.log(quad.area);
quad.area = 25;
console.log(quad.altura, quad.altura);

`,
    exercicio: '',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.6 Classes
// Metodos e chaining
class Pessoa {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.posicao = 0;
  }

  walk(distancia) {
    this.posicao += distancia;
    return this;
  }
  
}

const charles = new Pessoa('Charles', 40, 1.74);
charles.walk(10);
console.log(charles.posicao);
charles.walk(10).walk(10).walk(10);
console.log(charles.posicao);

`,
    exercicio: '',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.6 Classes
// Herança
class Pessoa {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }
}

class Dev extends Pessoa {
    constructor (nome, idade, altura, linguagem) {
        super(nome, idade, altura);
        this.lingagem = linguagem;
    }
}

const charles = new Dev('Charles', 40, 1.74, 'Javascript');
console.log(charles, charles.lingagem);

`,
    exercicio: '',
    mdn: ''
});

module.exports = { cap };
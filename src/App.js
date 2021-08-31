// Versão para colaboração
import React, { Component } from 'react';
import Prism from 'prismjs';
import './App.css';
import './prism.css';
import { categories } from './snippets/categories';
const { cap1 } = require("./snippets/cap1");
const { cap2 } = require("./snippets/cap2");
const { cap3 } = require("./snippets/cap3");
const { cap4 } = require("./snippets/cap4");
const { cap5 } = require("./snippets/cap5");
const { cap6 } = require("./snippets/cap6");
const { cap7 } = require("./snippets/cap7");
const { cap8 } = require("./snippets/cap8");
const { cap9 } = require("./snippets/cap9");
const { cap10 } = require("./snippets/cap10");
const { cap11 } = require("./snippets/cap11");
const { cap12 } = require("./snippets/cap12");
const { cap13 } = require("./snippets/cap13");
const { cap14 } = require("./snippets/cap14");
const snippets = [...cap1, ...cap2, ...cap3, ...cap4, ...cap5, ...cap6, ...cap7, ...cap8, ...cap9, ...cap10, ...cap11, ...cap12, ...cap13, ...cap14];
Prism.manual = true;
let valor = "console.log('This is JEP');";
let transfer = [];
export class App extends Component {
  loging = () => {
    if (!transfer.length)
      transfer.push('Para essa operação, verifique no console do navegador.');
    if (transfer.findIndex(val => transfer[0].includes('object Object')) >= 0)
      transfer.push("Há objeto no retorno, verifique no console do navegador para mais detalhes.")
    transfer = transfer.map((code, i) =>
      <Code key={i} code={code} className={`language-js`} butt={'0'}></Code>
    );
    this.setState({ conteudo: transfer });
  }

  state = { conteudo: transfer };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>JEP - Javascript Explorer Playground <a href="https://github.com/start-tech-react/JEP">Repositório GitHub</a></h3>
        </header>
        <main>
          <Explorer loging={() => this.loging()} tranfer={this.state.conteudo} />
          <Console loging={() => this.loging()} tranfer={this.state.conteudo} />
        </main>
      </div>
    );
  };
};

export class Code extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  state = { code: '' };
  componentDidMount() {
    this.highlight();
  }
  componentDidUpdate() {
    this.highlight();
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current);
    }
  }
  execute = () => {
    evaluate(this.ref.current.textContent);
    this.props.loging();
  }
  render() {
    const { code, plugins, language, butt } = this.props;
    const button = butt ? '' : <button onClick={this.execute}>executar</button>;

    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={this.ref} className={`language-${language}`}>
          {code.trim()}
        </code>
        {button}
      </pre>
    )
  }
}

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.imp = React.createRef();
    this.cat = React.createRef();
  }

  componentDidMount() {
    this.listar(snippets);
    this.listarCat(categories);
  }

  listCat = [];
  listItems = [];
  state = { conteudo: this.listItems, categorias: this.listCat };
  listar = (lista) => {
    this.listItems = lista.map((code, i) =>
      <Code
        key={i}
        code={code}
        language="js"
        loging={() => this.props.loging()}
        tranfer={this.props.tranfer}
      />
    );
    this.setState({ conteudo: this.listItems });
  }


  listarCat = (lista) => {
    this.listCat = lista.map((cat, i) =>
      <option key={i}>{cat}</option>
    );
    this.setState({ categorias: this.listCat });
  }

  search = () => {
    if (this.imp && this.imp.current) {
      const result = snippets.filter(i => i.includes(this.imp.current.value));
      this.listar(result);
    }
  }

  categotieChange = () => {
    this.imp.current.value = this.cat.current.value;
    this.search();
  }

  render() {
    return (
      <div className="snippets">
        <select ref={this.cat} onChange={this.categotieChange} className="categories">{this.state.categorias}</select>
        <input ref={this.imp} onKeyUp={this.search} className="btn-search" type="text" id="" />
        {this.state.conteudo}
      </div>
    );
  }
}

class Console extends Component {
  execute = () => {
    evaluate(document.getElementById('code').value);
    this.props.loging();
  }

  render() {
    return (
      <div className="box">
        <div className="console">
          <textarea id="code" defaultValue={valor} cols="50" rows="10" placeholder="Cole ou digite o código aqui, depois clique em Executar."></textarea>
          {/* <Editor
            code={valor}
            language="js"
            loging={() => this.props.loging()}
            tranfer={this.props.tranfer}
          /> */}
          <button onClick={this.execute} className='btn-executar'>Executar o código acima.</button>
          <div className="consolelog">{this.props.tranfer}</div>
        </div>
      </div>
    );
  }
}

// class Editor extends Component {
//   constructor(props) {
//     super(props);
//     this.ref = React.createRef();
//   }
//   state = { code: '' };
//   componentDidMount() {
//     this.highlight();
//   }
//   highlight = () => {
//     if (this.ref && this.ref.current) {
//       Prism.highlightElement(this.ref.current);
//     }
//   }
//   execute = () => {
//     evaluate(this.ref.current.textContent);
//     this.props.loging();
//   }
//   render() {
//     const { code, plugins, language } = this.props;
//     return (
//       <pre className={!plugins ? "" : plugins.join(" ")}>
//         <code ref={this.ref} className={`language-${language}`}>
//           {code.trim()}
//         </code>
//         <button onClick={this.execute}>executar</button>
//       </pre>
//     )
//   }
// }

export default App;

function evaluate(y) {
  transfer = [];
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.text = "{console.clear();" + y + "}";
  document.getElementById("code").value = y;
  document.getElementsByTagName('head')[0].appendChild(script);
  document.head.removeChild(document.head.lastChild);
}

const realConsoleLog = console.log;
console.log = function () {
  let message = [].join.call(arguments, ": ");
  // transfer += message + "\n";
  transfer.push(message);
  realConsoleLog.apply(console, arguments);
};
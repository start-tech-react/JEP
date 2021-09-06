// Versão para colaboração
import React, { Component } from 'react';
import {
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";
import Prism from 'prismjs';
import './App.css';
import './prism.css';
import exercicios from './snippets/exercicios';

const url = window.location.href.split('/');
const exercise = url[url.length - 1];
let { [exercise]: snippet } = exercicios;
Prism.manual = true;
let problema = `// Problema ${exercise} não encontrado, verifique a URL`;
let solucao = 'Nada esperado';
if (snippet) ({ problema, solucao } = snippet);
let transfer = [];

export class App extends Component {
  loging = () => {
    if (!transfer.length)
      transfer.push('Resultado: ');
    if (transfer.findIndex(val => transfer[0].includes('object Object')) >= 0)
      transfer.push("Há objeto no retorno, verifique no console do navegador para mais detalhes.");

    transfer.push('Esperado: ' + solucao);
    transfer.push(transfer[0] === solucao ? 'Teste passou! 😀 ' : "Teste falhou 😞 ");

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
          <h3>JEP - Javascript Explorer Playground - Exercícios</h3>
        </header>
        <main>
          <Switch>
            <Route path="/exer/:id" children={<Probl loging={() => this.loging()} transfer={this.state.conteudo} />} />

          </Switch>

        </main>
      </div>
    );
  };
};

function Probl(props) {
  let { id } = useParams();
  if (!snippet) ({ [id]: snippet } = exercicios);
  if (snippet) ({ problema, solucao } = snippet);
  return (
    <Console loging={props.loging} transfer={props.transfer} />
  );
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

class Console extends Component {
  execute = () => {
    evaluate(document.getElementById('code').value);
    this.props.loging();
  }

  render() {
    return (
      <div className="box">
        <div className="console">
          <textarea id="code" defaultValue={problema} cols="50" rows="10" placeholder="Cole ou digite o código aqui, depois clique em Executar."></textarea>
          {/* <Editor
            code={valor}
            language="js"
            loging={() => this.props.loging()}
            tranfer={this.props.tranfer}
          /> */}
          <div>
            <Link to="/"><button className='btn-executar'>Voltar</button></Link>
            <button onClick={this.execute} className='btn-executar'>Executar o código acima.</button>
          </div>

          <div className="consolelog">{this.props.transfer}</div>
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
  script.text = "{console.clear();" + y + "\n}";
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
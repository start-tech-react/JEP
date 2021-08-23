import React, { Component } from 'react';
import Prism from 'prismjs';
import './App.css';
import './prism.css';
import { snippets } from './snippets';
Prism.manual = true;
let valor = "console.log('giu');";
let transfer = "";
export class App extends Component {
  loging = () => {
    this.setState({ conteudo: transfer });
  }

  state = { conteudo: transfer };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>JEP - Javascript Explorer Playground <a href="https://github.com/GiuZambot/jep">Repositório GitHub</a></h3>
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
    const { code, plugins, language } = this.props;
    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={this.ref} className={`language-${language}`}>
          {code.trim()}
        </code>
        <button onClick={this.execute}>executar</button>
      </pre>
    )
  }
}

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.listar(snippets);
  }

  listItems = [];
  state = { conteudo: this.listItems };

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

  search = () => {
    if (this.ref && this.ref.current) {
      const result = snippets.filter(i => i.includes(this.ref.current.value));
      this.listar(result);
    }
  }

  render() {
    return (
      <div className="snippets">
        <h6>Snippets</h6>
        <input ref={this.ref} onKeyUp={this.search} className="btn-search" type="text" id="" />
        {this.state.conteudo}
      </div>
    );
  }
}

class Console extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  state = { conteudo: valor };

  execute = () => {
    evaluate(document.getElementById('code').value);
    this.props.loging();
    //this.ref = React.createRef();
  }

  render() {
    return (
      <div className="box">
        <div className="console">
          <h6>Editor:</h6>
          <textarea id="code" defaultValue={valor} cols="25" rows="10" placeholder="Cole ou digite o código aqui, depois clique em Executar."></textarea>
          {/* <Editor
            code={valor}
            language="js"
            loging={() => this.props.loging()}
            tranfer={this.props.tranfer}
          /> */}
          <button onClick={this.execute} className='btn-executar'>Executar o código acima.</button>
          <div className="console">{this.props.tranfer}</div>
        </div>

      </div>
    );
  }
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  state = { code: '' };
  componentDidMount() {
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
    const { code, plugins, language } = this.props;
    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={this.ref} className={`language-${language}`}>
          {code.trim()}
        </code>
        <button onClick={this.execute}>executar</button>
      </pre>
    )
  }
}

export default App;

function evaluate(y) {
  transfer = '';
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.text = "{console.clear();" + y + "}";
  document.getElementById("code").value = y;
  document.getElementsByTagName('head')[0].appendChild(script);
  document.head.removeChild(document.head.lastChild);
}

var realConsoleLog = console.log;
console.log = function () {
  var message = [].join.call(arguments, ", ");
  transfer += `${message}\n`;
  realConsoleLog.apply(console, arguments);
};
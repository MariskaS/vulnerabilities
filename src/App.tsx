import React from 'react';
import logo from './logo.svg';
import UiQAItem from "./components/UiQAItem";

const UiQAList = [
  {
    id: '1',
    question: 'Vulnerabilities what is this?',
    answer: ``,
    resources: [
      {
        id: '11',
        url: 'string',
        text: 'string',
      },
      {
        id: '12',
        text: 'string',
      }
    ],
  },
  // types
  {
    id: '2',
    question: 'Cross Site Scripting(XSS)',
    type: 'injection',
    answer: `
<p>
    XSS attacks occur when an attacker uses a web application to send malicious script.
    It may occur everywhere where you see an <input> without validating or encoding.
</p>
<p>
    The malicious script can access any cookies, session tokens,
    or other sensitive information retained by the browser and used with that site.
</p>
<p>These scripts can even rewrite the content of the HTML page.</p>
`,
    resources: [
      {
        id: '11',
        url: 'https://owasp.org/www-community/attacks/xss/',
        text: 'OWASP Cross Site Scripting (XSS)',
      },
      {
        id: '12',
        text: 'string',
      }
    ],
  },
  {
    id: '2',
    question: 'SQL Query',
    answer: ``,
    resources: [
      {
        id: '11',
        url: 'string',
        text: 'string',
      },
      {
        id: '12',
        text: 'string',
      }
    ],
  }


]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {UiQAList.map((item) => (
          <UiQAItem key={item.id} {...item}/>
        ))}
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

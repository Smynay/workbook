import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const starWarsChars = [
  { name: 'Dart Vaider', side: 'dark' },
  { name: 'Luk Skywalker', side: 'light' },
  { name: 'Palpatin', side: 'dark' },
  { name: 'Obi Van Kanobi', side: 'light' },
];

function App({ list, side = 'light' }) {
  const filteredList = list.filter((char) => char.side === side);
  return (
    <div className="App">
      <ul>
        {filteredList.map((char, index) => (
          <li key={char.name + index}>
            <strong>{char.name} - </strong>
            {char.side}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App list={starWarsChars} />
  </React.StrictMode>,
  document.getElementById('root')
);

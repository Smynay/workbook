import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const starWarsChars = [
  { name: 'Dart Vaider', side: 'dark' },
  { name: 'Luk Skywalker', side: 'light' },
  { name: 'Palpatin', side: 'dark' },
  { name: 'Obi Van Kanobi', side: 'light' },
];

const App = ({ list }) => {
  return (
    <div className="App">
      <ul>
        {list.map((char, index) => (
          <li key={char.name + index}>
            <strong>{char.name} - </strong>
            {char.side}
          </li>
        ))}
      </ul>
    </div>
  );
};

const withFilterdProps = (Component) => ({ list, side }) => {
  const filteredList = list.filter((char) => char.side === side);
  return <Component list={filteredList} />;
};

const FilteredList = withFilterdProps(App);

ReactDOM.render(
  <React.StrictMode>
    <FilteredList list={starWarsChars} side={'dark'} />
  </React.StrictMode>,
  document.getElementById('root')
);

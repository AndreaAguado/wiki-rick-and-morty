import '../styles/App.scss';
import logo from '../images/Rick_and_Morty_logo.png';

import callToApi from '../services/callToApi';

import { useState, useEffect } from 'react';

function App() {

  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    callToApi().then(response => {
      console.log(response);
      setCharactersData(response);
    });
  }, []);

  return (
    <div className="page">
      <header className="header">
        <img src={logo} alt="Rick and Morty logo" />
      </header>
      <main className="main">
        <form action="">
          <input type="text" />
        </form>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

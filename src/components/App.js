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

  const renderCharacters = () => {
    return charactersData.map((character) => {
      return (
        <li key={character.id} id={character.id} className="character_card">
          <img src={character.photo} alt={character.name} />
          <p>{character.name}</p>
          <p>{character.species}</p>
        </li>
      )
    })
  }

  return (
    <div className="page">
      <header className="header">
        <img src={logo} alt="Rick and Morty logo" />
      </header>
      <main className="main">
        <form action="">
          <input type="text" />
        </form>
        <section className="characters_list">
          <ul>
            {renderCharacters()}
            {/* <li className="character_card">
              <img src="" alt="" />
              <p>Name: </p>
              <p>Species: </p>
            </li> */}
          </ul>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

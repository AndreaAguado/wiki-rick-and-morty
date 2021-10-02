import '../styles/App.scss';

import callToApi from '../services/callToApi';

import { useState, useEffect } from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Footer from './Footer';

function App() {

  const [charactersData, setCharactersData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    callToApi().then(response => {
      console.log(response);
      setCharactersData(response);
    });
  }, []);


  const filteredData = charactersData.filter((character) => {
    return character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  })

  const handleSearch = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
  }

  const routeData = useRouteMatch('/character/:id');
  console.log(routeData);
  const characterId = routeData !== null ? routeData.params.id : '';
  console.log(characterId);
  const clickedCharacter = charactersData.find((character) => character.id === parseInt(characterId));
  console.log(clickedCharacter);

  return (
    <div className="page">
      <Header></Header>
      {/* <header className="header">
        <img className="header_logo" src={logo} alt="Rick and Morty logo" />
      </header> */}
      <main className="main">
        <Filters handleSearch={handleSearch}></Filters>
        <section className="characters_list_section" >
          <CharacterList filteredData={filteredData}></CharacterList>
        </section>
        <Switch>
          <Route exact path='/'>

          </Route>
          <Route path='/character/:id'>
            <CharacterDetail character={clickedCharacter}></CharacterDetail>
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
      {/* <footer className="footer">
        <small className="footer_small"> &copy; Andrea Aguado 2021</small>

      </footer> */}
    </div>
  );
}

export default App;

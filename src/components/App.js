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

      <Switch>
        <Route exact path='/'>
          <Header></Header>
          <main className="main">
            <Filters handleSearch={handleSearch}></Filters>
            <section className="characters_list_section" >
              <CharacterList filteredData={filteredData}></CharacterList>
            </section>
          </main>
          <Footer></Footer>
        </Route>
        <Route path='/character/:id'>
          <Header></Header>
          <CharacterDetail character={clickedCharacter}></CharacterDetail>
          <Footer></Footer>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

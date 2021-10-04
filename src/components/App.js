import '../styles/App.scss';

import callToApi from '../services/callToApi';

import { useState, useEffect } from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import NoFoundPage from './NoFoundPage';

function App() {

  const [charactersData, setCharactersData] = useState([]);
  const [search, setSearch] = useState('');
  const [speciesSelection, setSpeciesSelection] = useState('All');
  // const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    callToApi().then(response => {
      console.log(response);
      setCharactersData(response);
    });
  }, []);

  console.log(speciesSelection);
  let filteredData = charactersData.filter((character) => {
    return character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }).filter((character) => {

    if (speciesSelection === 'All') {
      return true;
    }
    else {
      return character.species === speciesSelection;
    }
  });

  console.log(filteredData);
  // console.log(aux);

  const handleSearch = (value) => {
    // ev.preventDefault();
    setSearch(value);
  }

  const handleSpecies = (value) => {
    setSpeciesSelection(value);
  }

  // const handleLastSearch = (ev) => {
  //   ev.preventDefault();
  //   setLastSearch(search);
  // }

  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';
  const clickedCharacter = charactersData.find((character) => character.id === parseInt(characterId));

  return (
    <div className="page">
      <Switch>
        <Route exact path='/'>
          <Header></Header>
          <Main>
            <Filters
              // lastSearch={lastSearch} 
              search={search}
              handleSearch={handleSearch}
              handleSpecies={handleSpecies}></Filters>
            <section className="characters_list_section" >
              <CharacterList search={search} filteredData={filteredData}></CharacterList>
            </section>
          </Main>
          <Footer></Footer>
        </Route>
        <Route path='/character/:id'>
          <Header></Header>
          <Main>
            <Filters
              // lastSearch={lastSearch} 
              search={search}
              handleSearch={handleSearch}></Filters>
            <section className="characters_list_section" >
              <CharacterList search={search} filteredData={filteredData}></CharacterList>
            </section>
          </Main>
          <Footer></Footer>
          <CharacterDetail
            // handleLastSearch={handleLastSearch} 
            character={clickedCharacter}></CharacterDetail>
        </Route>
        <Route>
          <Header></Header>
          <Main>
            <NoFoundPage></NoFoundPage>
          </Main>
          <Footer></Footer>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

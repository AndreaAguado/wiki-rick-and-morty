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
import objectToExport from '../services/callToApi';

function App() {

  const [charactersData, setCharactersData] = useState([]);
  const [search, setSearch] = useState('');
  const [speciesSelection, setSpeciesSelection] = useState('All');
  const [statusSelection, setStatusSelection] = useState('All');
  const [nextPageCharacters, setNextPageCharacters] = useState([]);

  useEffect(() => {
    objectToExport.callToApi().then(response => {
      console.log(response);
      setCharactersData(response);
    });
  }, []);

  useEffect(() => {
    objectToExport.nextPages().then(response => {
      console.log(response);
      setNextPageCharacters(response);
    })
  }, nextPageCharacters);

  charactersData.sort((a, b) => {
    let textA = a.name.toLocaleLowerCase();
    let textB = b.name.toLocaleLowerCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

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
  }).filter((character) => {
    if (statusSelection === 'All') {
      return true;
    }
    else {
      return character.status === statusSelection;
    }
  })

  console.log(filteredData);

  const handleSearch = (value) => {
    setSearch(value);
  }

  const handleSpecies = (value) => {
    setSpeciesSelection(value);
  }

  const handleStatus = (value) => {
    setStatusSelection(value);
  }

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
              search={search}
              handleSearch={handleSearch}
              handleSpecies={handleSpecies}
              handleStatus={handleStatus}></Filters>
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
              search={search}
              handleSearch={handleSearch}></Filters>
            <section className="characters_list_section" >
              <CharacterList search={search} filteredData={filteredData}></CharacterList>
            </section>
          </Main>
          <Footer></Footer>
          <CharacterDetail
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

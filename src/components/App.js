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

function App() {

  const [charactersData, setCharactersData] = useState([]);
  const [search, setSearch] = useState('');
  // const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    callToApi().then(response => {
      console.log(response);
      setCharactersData(response);
    });
  }, []);


  const filteredData = charactersData.filter((character) => {
    return character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  })

  const handleSearch = (value) => {
    // ev.preventDefault();
    setSearch(value);
  }

  // const handleLastSearch = (ev) => {
  //   ev.preventDefault();
  //   setLastSearch(search);
  // }

  const routeData = useRouteMatch('/character/:id');
  console.log(routeData);
  const characterId = routeData !== null ? routeData.params.id : '';
  console.log(characterId);
  const clickedCharacter = charactersData.find((character) => character.id === parseInt(characterId));
  console.log(clickedCharacter);

  return (
    <div className="page">
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
      <Switch>
        <Route exact path='/'>
        </Route>
        <Route path='/character/:id'>
          <CharacterDetail
            // handleLastSearch={handleLastSearch} 
            character={clickedCharacter}></CharacterDetail>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

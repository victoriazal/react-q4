import { createContext, useEffect, useState } from 'react';
import './Search.css';
import Results from '../searchResults/Results';

export const SearchContext = createContext('');
export const CharactersContext = createContext([]);

export default function Search() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then(
        (data) => {
          setCharacters(data.results);
          console.log(characters);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('inputData') || ''
  );
  const [filter, setFilter] = useState('');

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputData = event.target.value;
    localStorage.setItem('inputData', inputData);
    setSearchValue(inputData);
  }

  function handleSearchBtn() {
    setFilter(searchValue);
  }
  return (
    <>
      <div className="search">
        <form>
          <input
            onChange={handleSearchChange}
            className="search-input"
            placeholder="..."
            value={searchValue || ''}
          ></input>
          <button
            type="button"
            className="search-btn"
            onClick={handleSearchBtn}
          >
            Search
          </button>
        </form>
      </div>
      <CharactersContext.Provider value={characters}>
        <SearchContext.Provider value={searchValue}>
          <Results />
        </SearchContext.Provider>
      </CharactersContext.Provider>
    </>
  );
}

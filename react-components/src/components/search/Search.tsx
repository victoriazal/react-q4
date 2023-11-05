import { useState } from 'react';
import './Search.css';
import Results from '../searchResults/Results';

export default function Search() {
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
      <Results clicked={filter} />
    </>
  );
}

import { createContext, useEffect, useState } from 'react';
import './Results.css';
import Item from '../searchItem/SearchItem';
import Pagination from '../pagination/Pagination';
import { useContext } from 'react';
import { SearchContext, CharactersContext } from '../search/Search';

export default function Results() {
  const characters = useContext(CharactersContext);
  const filter = useContext(SearchContext);
  const [filteredCharacters, setFilteredCharacters] = useState(
    useContext(CharactersContext)
  );
  const [isItemActive, setIsItemActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  useEffect(() => {
    const filtered = characters.filter((character: { name: string }) =>
      character.name.toLowerCase().replace(/\s/g, '').includes(filter)
    );
    setFilteredCharacters(filtered);
  }, [filter, characters]);

  return (
    <>
      <div className="wrapper">
        <div className="results">
          {characters.length > 0 ? (
            filteredCharacters
              .slice(firstPostIndex, lastPostIndex)
              .map((elem: { id: string; name: string; birth_year: string }) => {
                return (
                  <Item
                    id={elem.id}
                    name={elem.name}
                    birth_year={elem.birth_year}
                  />
                );
              })
          ) : (
            <div className="loading">Loading...</div>
          )}
        </div>
      </div>
      <div>{isItemActive ? <h2>Hello</h2> : <span></span>}</div>
      <Pagination
        totalPosts={filteredCharacters.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

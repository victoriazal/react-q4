import { useEffect, useState } from 'react';
import './Results.css';
import Item from '../searchItem/SearchItem';
import Pagination from '../pagination/Pagination';

export default function Results(props: { clicked: string }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then(
        (data) => {
          setCharacters(data.results);
          setFilteredCharacters(
            data.results.filter((character: { name: string }) =>
              character.name
                .toLowerCase()
                .replace(/\s/g, '')
                .includes(localStorage.getItem('inputData') || '')
            )
          );
          console.log(filteredCharacters);
          setIsLoaded(true);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
        }
      );
  }, []);

  useEffect(() => {
    const filtered = characters.filter((character: { name: string }) =>
      character.name.toLowerCase().replace(/\s/g, '').includes(props.clicked)
    );
    setFilteredCharacters(filtered);
  }, [props.clicked]);

  return (
    <>
      <div className="wrapper">
        <div className="results">
          {isLoaded ? (
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

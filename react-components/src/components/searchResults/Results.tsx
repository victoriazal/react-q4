import { useEffect, useState } from 'react';
import './Results.css';

export default function Results(props: { clicked: string }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then(
        (data) => {
          setCharacters(data.results);
          setFilteredCharacters(data.results);
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
    console.log(filteredCharacters);
    console.log(characters);
  }, [props.clicked]);

  return (
    <>
      <div className="wrapper">
        <div className="results">
          {isLoaded ? (
            filteredCharacters.map(
              (elem: { id: string; name: string; birth_year: string }) => {
                return (
                  <div key={elem.id} className="character">
                    <h5>{elem.name}</h5>
                    <span>Birth year: {elem.birth_year}</span>
                  </div>
                );
              }
            )
          ) : (
            <div className="loading">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
}

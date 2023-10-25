import { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  state = {
    characters: [
      {
        name: '',
        eye_color: '',
        birth_year: '',
      },
    ],
    loaded: false,
  };
  componentDidMount(): void {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data.results, loaded: true });
      });
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="results">
            {this.state.loaded ? (
              this.state.characters.map((elem) => {
                return (
                  <div className="character">
                    <h5>{elem.name}</h5>
                    <span>Eye color:{elem.eye_color}</span>
                    <span>Birth year:{elem.birth_year}</span>
                  </div>
                );
              })
            ) : (
              <div className="loading">Loading...</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

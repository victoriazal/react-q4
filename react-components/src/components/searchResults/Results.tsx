import { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  state = {
    characters: [
      {
        name: '',
        eye_color: '',
        birth_year: '',
        id: '',
      },
    ],
    loaded: false,
    filter: localStorage.getItem('inputValue') || '',
  };

  componentDidMount(): void {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          characters: data.results,
          loaded: true,
        });
      });
  }

  componentDidUpdate(prevProps: Readonly<{ filter: string }>): void {
    if (prevProps.filter !== this.props.filter) {
      const lowercaseFilter = this.props.filter
        .toLowerCase()
        .replace(/\s/g, '');
      const filtered = this.state.characters.filter((character) =>
        character.name
          .toLowerCase()
          .replace(/\s/g, '')
          .includes(lowercaseFilter)
      );
      this.setState({ characters: filtered });
    }
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="results">
            {this.state.loaded ? (
              this.state.characters.map((elem) => {
                return (
                  <div key={elem.id} className="character">
                    <h5>{elem.name}</h5>
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

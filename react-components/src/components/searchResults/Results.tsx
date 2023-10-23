import { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  render() {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((data) => console.log(data));
    return (
      <>
        <div className="results">
          <h1>Results</h1>
        </div>
      </>
    );
  }
}

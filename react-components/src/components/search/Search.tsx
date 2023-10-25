import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = { serachValue: localStorage.getItem('inputData') || '' };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
    console.log(event.target.value);
  };

  componentDidMount() {
    console.log('Mount');
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    // this.setState(JSON.parse(localStorage.getItem("inputData")))
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    localStorage.setItem('inputData', JSON.stringify(this.state));
  }
  render() {
    return (
      <>
        <div className="search">
          <input
            onChange={this.handleSearchChange}
            className="search-input"
            placeholder="..."
          ></input>
          <button type="submit" className="search-btn">
            Search
          </button>
        </div>
      </>
    );
  }
}

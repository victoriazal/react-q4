import { Component } from 'react';
import './Search.css';
import Results from '../searchResults/Results';

export default class Search extends Component {
  state = {
    searchValue: localStorage.getItem('inputData') || '',
    filter: '',
  };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = event.target.value;
    localStorage.setItem('inputData', inputData);
    this.setState({ searchValue: inputData });
  };

  handleSearchClick = () => {
    this.setState({ filter: this.state.searchValue });
  };

  render() {
    return (
      <>
        <div className="search">
          <input
            onChange={this.handleSearchChange}
            className="search-input"
            placeholder="..."
            value={this.state.searchValue || ''}
          ></input>
          <button
            onClick={this.handleSearchClick}
            type="submit"
            className="search-btn"
          >
            Search
          </button>
        </div>
        <Results filter={this.state.filter} />
      </>
    );
  }
}

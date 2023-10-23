import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  render() {
    return (
      <>
        <div className="search">
          <input className="search-input" placeholder="..."></input>
          <button type="submit" className="search-btn">
            Search
          </button>
        </div>
      </>
    );
  }
}

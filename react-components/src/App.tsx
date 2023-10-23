import { Component } from 'react';
import './App.css';
import Search from './components/search/Search';
import Results from './components/searchResults/Results';

export default class App extends Component {
  render() {
    return (
      <>
        <Search />
        <Results />
      </>
    );
  }
}

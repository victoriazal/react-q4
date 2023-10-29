import { Component } from 'react';
import './App.css';
import Search from './components/search/Search';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

export default class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <Search />
        </ErrorBoundary>
      </>
    );
  }
}

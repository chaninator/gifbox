import React, {Component} from 'react';
import LetsParty from './components/LetsParty';
import GifBox from './components/GifBox';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={GifBox}/>
          <Route path="/letsparty" component={LetsParty}/>
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LetsParty from './components/LetsParty';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/letsparty" component={LetsParty} />
    </div>
  </Router>,
  document.getElementById('root'));

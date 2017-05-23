import React, {Component} from 'react';
import LetsParty from './components/LetsParty';
import GifBox from './components/GifBox';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifUrl: ''
    }
  }

  onGifUrlChanged(url) {
    alert('new url: ' + url);
    this.setState({
      gifUrl: url
    })
  }

  render() {
    
    return (
      <Router>
        <div>
          <Route onGifUrlChanged={ this.onGifUrlChanged } exact path="/" component={GifBox}/>
          <Route gifSearch={ this.state.gifUrl } path="/letsparty" component={LetsParty}/>
        </div>
      </Router>
    );
  }
}

export default App;

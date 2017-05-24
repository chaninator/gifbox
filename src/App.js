import React, {Component} from 'react';
import LetsParty from './components/LetsParty';
import GifBox from './components/GifBox';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifQuery: ''
    }
    this.onGifSelect = this.onGifSelect.bind(this);
  }

  onGifSelect(gif) {
    alert('new gif: ' + gif);
    this.setState({
      gifQuery: gif
    });
  }

  render() {
    // console.log(this.onGifSelect);
    return (
      <Router>
        <div>
          <Route onGifSelect={this.onGifSelect} exact path="/" component={GifBox}/>
          <Route gifSearch={this.state.gifQuery} path="/letsparty" component={LetsParty}/>
        </div>
      </Router>
    );
  }
}

export default App;

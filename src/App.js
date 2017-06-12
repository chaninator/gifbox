import React, {Component} from 'react';
import LetsParty from './components/LetsParty';
import GifBox from './components/GifBox';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifQuery: '',
      audioLink: ''
    }
    this.gifBoxInput = this.gifBoxInput.bind(this);
  }

  gifBoxInput(gifSearch, audioUrl) {
    this.setState({
      gifQuery: gifSearch,
      audioLink: audioUrl
    });
  }

  render() {
    console.log('Gif sent up from the child: ', this.state.gifQuery);
    console.log('Audio sent up from the child: ', this.state.audioLink);
    return (
      <Router>
        <div>
          <Route path="/" component={ () => <GifBox gifBoxInput={ this.gifBoxInput } /> } />
          <Route path="/gifbox/letsparty" component={ () => <LetsParty gifSearch={ this.state.gifQuery } audioUrl={ this.state.audioLink } /> } />
        </div>
      </Router>
    );
  }
}

export default App;

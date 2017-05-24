import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './addparty.css';

class AddGifs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifUrl: '',
      audioUrl: ''
    };
  }

  render() {

    return (
      <section className="gif-background">
        {/* add gif input */}
        <div className="input-group">
          <input
            value={this.state.gifUrl}
            className="gif-field"
            onChange={(e) => this.setState({gifUrl: e.target.value})}
            type="text" placeholder="Search for Gifs" required/>
        </div>
        {/* add audio input */}
        <div className="input-group">
          <input
            value={this.state.audioUrl}
            className="audio-field"
            onChange={(e) => this.setState({audioUrl: e.target.value})}
            type="text"
            placeholder="Add Audio URL"
            required />
        </div>
        {/* lets party click button */}
        <Link to="/letsparty">
          <a className="party-btn"
            onClick={ this.props.gifBoxInput.bind(this, this.state.gifUrl, this.state.audioUrl)}>
            GIF ME IN THE EAR!
          </a>
        </Link>
      </section>
    );

  }

}

export default AddGifs;

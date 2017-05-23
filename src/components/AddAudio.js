import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './addaudio.css';

class AddAudio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audioUrl: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Audio Url Added: ', this.state.audioUrl);
    this.setState({audioUrl: this.state.audioUrl})
  }

  render() {

    return (
      <section className="audio-background">
        <form name="form-add-audio" onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
            <input
              value={this.state.audioUrl}
              className="audio-field"
              onChange={(e) => this.setState({audioUrl: e.target.value})}
              type="text"
              placeholder="Add Audio URL"
              required />

            <div className="react-player">
              <ReactPlayer url={this.state.audioUrl} playing></ReactPlayer>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default AddAudio;

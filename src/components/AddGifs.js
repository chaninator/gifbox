import React, { Component } from 'react';
import AddAudio from './AddAudio';
import './addgifs.css';

class AddGifs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifUrl: ''
    }
  }

  handleSubmit(e) {
  e.preventDefault();
  console.log('Gif Url Added: ', this.state.gifUrl);
  this.setState({
    gifUrl: this.state.gifUrl
  })
}
  render() {
    return(
      <section className="gif-background">
        <form name="form-add-gif" onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
            <input
              value={this.state.gifUrl}
              className="gif-field"
              onChange={(e)=> this.setState({gifUrl: e.target.value})}
              type="text"
              placeholder="Add Gif URL"
              required />
            <AddAudio />
          </div>
        </form>
      </section>
    );
  }

}

export default AddGifs;

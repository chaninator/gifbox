import React, {Component} from 'react';
import './addgifs.css';

class AddGifs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifSearch: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Gif Url Search: ', this.state.gifSearch);
    this.setState({gifSearch: this.state.gifSearch});
    this.props.getGifs();
  }


  render() {
    return (
      <section className="gif-background">
        <form name="form-add-gif" onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
            <input
              value={this.state.gifSearch}
              className="gif-field"
              onChange={(e) => this.setState({gifSearch: e.target.value})}
              type="text"
              placeholder="Search for Gifs" required/>
          </div>
        </form>
      </section>
    );
  }

}

export default AddGifs;

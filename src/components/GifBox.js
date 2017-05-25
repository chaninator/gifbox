import React, {Component} from 'react';
import AddParty from './AddParty';
// import axios from 'axios';
import './gifbox.css';

class GifBox extends Component {

  render() {

    console.log('please work for the love of god: ', this.props.gifBoxInput);

    return (
      <section className="gif-box-wrapper">
        <div className="title-container">
          <h2 className="title">GIF BOX</h2>
        </div>
        <AddParty {...this.props}/>
      </section>
    );
  }
}

export default GifBox;

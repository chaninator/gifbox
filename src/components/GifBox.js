import React, {Component} from 'react';
import AddParty from './AddParty';
import './gifbox.css';

class GifBox extends Component {

  render() {

    console.log('please work for the love of god: ', this.props.gifBoxInput);

    return (
      <section className="gif-box-wrapper">
        <div className="boombox">
          <div className="speaker-left">
            <div className="top-circle"></div>
            <div className="bot-circle"></div>
            <div className="bot-inner-circle"></div>
          </div>
          <div className="title-container">
            <h2 className="title">GIF BOX</h2>
          </div>
          <div className="speaker-right">
            <div className="top-circle"></div>
            <div className="bot-circle"></div>
            <div className="bot-inner-circle"></div>
          </div>
        </div>
        <AddParty {...this.props}/>
      </section>
    );
  }
}

export default GifBox;

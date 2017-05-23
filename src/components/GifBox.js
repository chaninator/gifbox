import React, { Component } from 'react';
import AddGifs from './AddGifs';
import { Link } from 'react-router-dom';
import './gifbox.css';

class GifBox extends Component {
  render() {
    return (
      <section className="gif-box-wrapper">
        <h2>Welcome to Gif Box</h2>
        <AddGifs />

          <Link to="/letsparty"><a className="party-btn">GIF ME IN THE EAR!</a></Link>

      </section>
    );
  }
}

export default GifBox;

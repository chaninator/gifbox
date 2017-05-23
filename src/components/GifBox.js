import React, {Component} from 'react';
import AddGifs from './AddGifs';
import AddAudio from './AddAudio';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './gifbox.css';

class GifBox extends Component {

  componentDidMount() {
    this.backgroundGifs();
  }

  backgroundGifs() {
    var gifArr = [];
    console.log('test');
    let apiKey = '&api_key=dc6zaTOxFJmzC';
    axios.get('http://api.giphy.com/v1/gifs/search?q=dance' + apiKey).then(function(response) {
      console.log('the response: ', response);
      console.log('giphy url: ', response.data.data[0].images.original.url);
      for (var i = 0; i < response.data.data.length; i++) {
        gifArr.push(response.data.data[i].images.original.url);
      }
      console.log(gifArr);
    }).catch(function(err) {
      console.log('error: ', err)
    })
  }

  render() {

    return (
      <section className="gif-box-wrapper">
        <h2>Welcome to Gif Box</h2>
        <AddGifs/>
        <AddAudio/>
        <Link to="/letsparty">
          <a className="party-btn">
            GIF ME IN THE EAR!
          </a>
        </Link>

      </section>
    );
  }
}

export default GifBox;

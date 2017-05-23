import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './letsparty.css';

class LetsParty extends Component {

  getGifs() {
    var gifArr = [];
    console.log('test');
    let apiKey = '&api_key=dc6zaTOxFJmzC';
    axios.get('http://api.giphy.com/v1/gifs/search?q=' + this.state.gifSearch + apiKey).then(function(response) {
      console.log('the response: ', response);
      console.log('giphy url: ', response.data.data[0].images.original.url);
      for(var i=0;i<response.data.data.length;i++) {
        gifArr.push(response.data.data[i].images.original.url);
      }
      console.log(gifArr);
    }).catch(function(err) {
      console.log('error: ', err)
    })
  }

  render() {
    // var background = {
    //   backgroundImage: "url(" + this.props.gifUrl + ")"
    // };
    // console.log('lets party gif url loaded:', this.props.gifUrl);
    return (
      <section>
        <h1>LETS START THIS PARTY</h1>

        <Link to="/">
          <a className="party-btn">END THIS PARTY!</a>
        </Link>

      </section>
    );
  }
}

export default LetsParty;

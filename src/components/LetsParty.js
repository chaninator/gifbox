import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './letsparty.css';

class LetsParty extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifArray: null
    }
  }

componentWillMount() {
  var gifArr = [];
  console.log('this is the answer to all my problems:', this.props.gifSearch);
  let apiKey = '&api_key=dc6zaTOxFJmzC';
  axios.get('http://api.giphy.com/v1/gifs/search?q=' + this.props.gifSearch + apiKey).then(function(response) {
    console.log('the response: ', response);
    console.log('giphy url: ', response.data.data[0].images.original.url);
    for(var i=0;i<response.data.data.length;i++) {
      gifArr.push(response.data.data[i].images.original.url);
    }
    console.log(gifArr);
    console.log('first gif URL: ', gifArr[0]);
    this.setState({
      gifArray: gifArr
    })
  }).catch(function(err) {
    console.log('error: ', err)
  })
}



  render() {
    var background = {
      backgroundImage: "url("gifArr[0]")"
    };
    console.log('lets party gif url loaded:', this.props.gifUrl);
    return (
      <section style={background}>
        <h1>LETS START THIS PARTY</h1>
        <Link to="/">
          <a className="party-btn">END THIS PARTY!</a>
        </Link>
        <div className="react-player">
          <ReactPlayer url={this.props.audioUrl} playing></ReactPlayer>
        </div>

      </section>
    );
  }
}

export default LetsParty;

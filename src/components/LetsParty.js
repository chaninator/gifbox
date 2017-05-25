import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './letsparty.css';

class LetsParty extends Component {
  constructor(props) {
    super(props);

    this.createGifArray = this.createGifArray.bind(this);

    this.state = {
      gifArray: [],
      counter: 0,
      backgroundImage: ''
    }
  }

  createGifArray(callback) {
    var gifArr = [];
    console.log('this is the answer to all my problems:', this.props.gifSearch);
    let apiKey = '&api_key=dc6zaTOxFJmzC';

    const self = this;
    axios.get('http://api.giphy.com/v1/gifs/search?q=' + this.props.gifSearch + apiKey + '&limit=100').then(function(response) {
      console.log('the response: ', response);
      // console.log('giphy url: ', response.data.data[0].images.original.url);
      for (var i = 0; i < response.data.data.length; i++) {
        gifArr.push(response.data.data[i].images.original.url);
      }
      console.log(gifArr);
      console.log('first gif URL: ', gifArr[0]);

      self.setState({
        gifArray: gifArr,
        backgroundImage: gifArr[self.state.counter],
        counter: self.state.counter++
      })
      console.log('STATE OF GIFARRAY: ', self.state.gifArray);
      console.log('STATE OF GIFARRAY 1: ', self.state.gifArray[0]);
    }).catch(function(err) {
      console.log('error: ', err)
    })
  }

  // componentWillMount() {
  //   this.createGifArray()
  // }

  componentDidMount(){
    this.createGifArray();
    setInterval(this.gifUpdate.bind(this), 3500);
  }

  gifUpdate(){
    this.setState({
      counter: this.state.counter + 1,
      backgroundImage: this.state.gifArray[this.state.counter]
    })

  }

  render() {
    return (
      <section className="partyStyle" style={{backgroundImage:'url(' +  this.state.backgroundImage + ')'}}>
        {/* <h1>LETS START THIS PARTY!!!</h1> */}
        <Link to="/">
          <a className="end-party-btn">START ANOTHER PARTY!</a>
        </Link>
        <div className="react-player">
          <ReactPlayer url={this.props.audioUrl} playing></ReactPlayer>
        </div>

      </section>
    );
  }
}

export default LetsParty;

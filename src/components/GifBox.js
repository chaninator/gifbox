import React, {Component} from 'react';
import AddParty from './AddParty';
// import axios from 'axios';
import './gifbox.css';

class GifBox extends Component {

  // componentDidMount() {
  //   this.backgroundGifs();
  // }
  //
  // backgroundGifs() {
  //   var gifArr = [];
  //   console.log('test');
  //   let apiKey = '&api_key=dc6zaTOxFJmzC';
  //   axios.get('http://api.giphy.com/v1/gifs/search?q=dance' + apiKey).then(function(response) {
  //     console.log('the response: ', response);
  //     console.log('giphy url: ', response.data.data[0].images.original.url);
  //     for (var i = 0; i < response.data.data.length; i++) {
  //       gifArr.push(response.data.data[i].images.original.url);
  //     }
  //     console.log(gifArr);
  //   }).catch(function(err) {
  //     console.log('error: ', err)
  //   })
  // }



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

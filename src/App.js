import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import ReactAnimatedWeather from 'react-animated-weather';
import Particles from 'react-particles-js';

import './App.css';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 28,
      "density": {
        "enable": true,
        "value_area": 4340.3120289775
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
};


class App extends Component {

  constructor(){
    super();
    this.state = {
      input:'',
      weatherArray:[]
    }
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () =>{
    const input = this.state.input;
    fetch(`https://glacial-spire-61775.herokuapp.com/${input}`,{
      method:'get',
      headers:{'Content-Type':'application/json'},
    })
    .then((res)=>{
      return res.json();
    })
    .then(response=>{
      
      this.setState({weatherArray:response})
    });
    
  }
  render(){
    //console.log(googleKey);
    return (
      <div className="App">
        <header>
        <Particles className='particles'
         params={particlesOptions}
         />
          <div className="Header-Search">
          <Header/>
          <SearchBar
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          />
          </div>
          <div>{
            this.state.weatherArray.map(el=>{
              return(
                <WeatherCard
                key={el.time}
                day={el.time}
                summary={el.summary}
                precipType={el.precipType}
                tempHigh={el.tempHigh}
                tempLow={el.tempLow}
                />
              )
            })
          }
          </div>
        </header>
        
      </div>
      
    );
  }
}

export default App;

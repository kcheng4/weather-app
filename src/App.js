import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import ReactAnimatedWeather from 'react-animated-weather';

import './App.css';



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

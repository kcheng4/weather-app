import {Card} from 'semantic-ui-react';
import ReactAnimatedWeather from 'react-animated-weather';
import React, { Component } from 'react';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'darkblue',
    size: 205,
    animate: true
};

const weekday = [];
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

class WeatherCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
  
        }
    }
  
    clothingSuggestion = (temp)=>{
        if(parseInt(temp)>70){
            return "It's pretty warm out. You can wear shorts.";
        }
        else if(parseInt(temp)<40){
            return "It's chilly out. Wear long sleeves.";
        }
        else {
            return "You can probably wear whatever.";
        }
    }

    render() {
        const {day,summary,precipType,tempHigh,tempLow} = this.props;
        console.log(day,summary,precipType,tempHigh,tempLow);
        const dayOfWeek = new Date(day*1000);
        const dayName = weekday[dayOfWeek.getDay()];
        let icon;
        let clothing;
        if(precipType==='rain'){
            icon='RAIN';
            clothing='Bring your rainboots. The storm is coming.'
        }
        else if (precipType==='snow'){
            icon='SNOW';
            clothing='Winter is upon us. Bundle up.'
        }
        else if (precipType==='sleet'){
            icon='SLEET';
            clothing='Layer up. Ice rains from the sky.';
        }
        else if (summary.includes('cloudy')){
            icon='CLOUDY';
            clothing=this.clothingSuggestion(parseInt(tempHigh));
        }
        else if (summary.includes('windy')){
            icon='WIND';
            clothing=this.clothingSuggestion(parseInt(tempHigh));
        }
        else if (summary.includes('foggy')){
            icon='FOG';
            clothing=this.clothingSuggestion(parseInt(tempHigh));
        }
        else {
            icon='CLEAR_DAY';
            clothing=this.clothingSuggestion(parseInt(tempHigh));
        }
        return(
            <div className='tc grow br2 pa3 ma2 dib bw2 shadow-8'>
                    <h1>{dayName}</h1>
                    
                    <ReactAnimatedWeather
                        icon={icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
                    /> 
                    <div>
                        <h3>High: {parseInt(tempHigh)}°F</h3>
                        <h3>Low: {parseInt(tempLow)}°F</h3>  
                        <p>{summary}</p>
                        <p>{clothing}</p>  
                    </div>
            </div>
        );
    }
  
}
  
export default WeatherCard;
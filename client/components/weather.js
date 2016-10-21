import React, {Component} from 'react';
import axios from 'axios';


const API = '6b2efa163b9b7e6a108704a52f170828';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API}`;


class Weather extends Component {

	componentWillMount(){
		navigator.geolocation.getCurrentPosition(function(position) { console.log('this is the position coordinates, ', position.coords) });
		axios.get(ROOT_URL)
			   .then(function(response) {
			     console.log('what is the response here, ', response.data);
			   })
	}

	render() {
		return (
			<div>
				<div className='currentTemp'>Temp</div>
				<div className='weatherIcon'>Icon</div>
				<div className='location'>Location</div>
			</div>
		)
	}
};

export default Weather;
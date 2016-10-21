import React, {Component} from 'react';
import TimeAndGreeting from './timeAndGreeting';
import Weather from './weather';
import Links from './links';

class App extends Component {
	render() {
		return (
			<div>
				<Weather/>
				<TimeAndGreeting/>
			</div>
		)
	}
};

export default App;
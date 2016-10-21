import React, {Component} from 'react';
import TimeAndGreeting from './timeAndGreeting';
import Weather from './weather';
import Links from './links';
import Quote from './quote';

class App extends Component {
	render() {
		return (
			<div>
				<Weather/>
				<TimeAndGreeting/>
				<Links/>
				<Quote/>
			</div>
		)
	}
};

export default App;
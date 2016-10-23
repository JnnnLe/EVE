import React, {Component} from 'react';
import TimeAndGreeting from './timeAndGreeting';
import Weather from './weather';
import Links from './links';
import Quote from './quote';
import ImgLink from './ImgLink';
import ToDo from './todo';

class App extends Component {
	render() {
		return (
			<div>
				<Weather/>
				<ToDo/>
				<TimeAndGreeting/>
				<Links/>
				<Quote/>
				<imgLink/>
			</div>
		)
	}
};

export default App;
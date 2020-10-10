import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import VoiceRecoginition from './components/VoiceRecoginition';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import TodayEvents from './components/TodayEvents';
import PastEvents from './components/PastEvents';

function App() {
	return (
		<Wrapper>
			<Router>
				<Header/>
				<Route exact path='/' component={TodayEvents}/>
				<Route path='/event' component={PastEvents}/>
				<Route path='/meeting' component={VoiceRecoginition}/>
			</Router>
		</Wrapper>
	);
}

const Wrapper = styled.div`
  display: block;
`;

export default App;

import React from 'react';
import NewMeeting from './NewMeeting';
import styled from 'styled-components';
import TodaySchedule from '../containers/TodaySchedule';

const TodayEvents = () => {
	return (
		<Wrapper>
			<NewMeeting/>
			<TodaySchedule/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: inline-flex;
`;

export default TodayEvents;

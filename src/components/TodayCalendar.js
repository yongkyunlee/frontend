import React from 'react';
import 'dayjs';
import styled from 'styled-components';
import dayjs from 'dayjs';
import EventElement from './EventElement';

const TodayCalendar = ({eventList}) => {
	return (
		<Wrapper>
			<Title>{dayjs().locale('ko').format('ddd MMM D')}</Title>
			<TodayMeeting>
				{
					eventList.map((event, idx) => <EventElement key={idx} event={event}/>)
				}
			</TodayMeeting>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 400px;
	margin: 0 auto;
  padding: 20px 100px;
`;

const Title = styled.div`
	margin: auto;
	height: 120px;
	line-height: 120px;
	text-align: center;
	font-size: 30px;
	font-weight: 700;
`;

const TodayMeeting = styled.div`
	background-color: #ffffff;
	border-radius: 5px;
	width: 100%;
	height: 445px;
	overflow-x: hidden;
	overflow-y: auto;
	
	::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #1089FF;
    border-radius: 7px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #eeeeee;
    border-radius: 7px;
`;

export default TodayCalendar;

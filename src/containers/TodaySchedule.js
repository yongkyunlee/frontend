import React from 'react';
import {dummyCalendarEvent} from '../data/calendarList';
import TodayCalendar from '../components/TodayCalendar';

const TodaySchedule = () => {
	const data = dummyCalendarEvent;

	return (
		<>
			<TodayCalendar eventList={data} />
		</>
	);
};

export default TodaySchedule;

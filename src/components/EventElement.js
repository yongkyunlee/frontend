import React from 'react';
import styled from 'styled-components';

const EventElement = ({event}) => {
	return (
		<Wrapper>
			<DateTime>
				<div>{event.date}</div>
				<div>{event.time}</div>
			</DateTime>
			<Title>{event.title}</Title>
			<Admin>
				<button>Edit</button> |
				<button>Delete</button>
			</Admin>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 331px;
	padding: 25px 14px 14px 25px;
	background-color: #eeeeee;
	color: #000000;
	margin-bottom: 15px;
	border-radius: 5px;
	transition: 0.4s;
	
	:hover {
		cursor: pointer;
		background-color: #cccccc;
		transition: 0.4s;
	}
`;

const DateTime = styled.div`
	display: flex;
	font-size: 15px;
	line-height: 15px;
	margin-bottom: 9px;
	
	div {
		margin-right: 25px;
	}
`;

const Title = styled.div`
	font-size: 20px;
	font-weight: 700;
	line-height: 20px;
`;

const Admin = styled.div`
	font-size: 15px;
	text-align: end;

	button {
		border: none;
		background-color: transparent;
		
		:hover {
			cursor: pointer;		
		}

		:focus {
			outline: none;
		}
	}

	button:nth-child(1) {
		color: #1089FF;
	}
	
	button:nth-child(2) {
		color: #FF6332;
	}
`

export default EventElement;

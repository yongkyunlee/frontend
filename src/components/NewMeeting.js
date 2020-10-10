import React from 'react';
import styled from 'styled-components';
import {HiPlus} from 'react-icons/hi';

const NewMeeting = () => {
	return (
		<Wrapper>
			<Title>New Meeting</Title>
			<EnterButton onClick={() => window.location.href = '/meeting'}>
				<HiPlus/>
			</EnterButton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 370px;
	margin: 0 auto;
	padding: 60px 0;
`;

const Title = styled.div`
	margin: auto;
	height: 120px;
	line-height: 120px;
	text-align: center;
	font-size: 30px;
	font-weight: 700;
`;

const EnterButton = styled.button`
	background-color: #1089FF;
	box-shadow: 10px 10px 20px rgba(35, 55, 77, 0.3);
	border-radius: 5px;
	width: 100%;
	height: 445px;
	outline: none;
	border: 0;
	transition: 0.3s ease-in-out;
	
	:hover {
		cursor: pointer;
		background-color: #149aFF;
		transition: 0.3s ease-in-out;
	}
	
	svg {
    fill: #ffffff;
    width: 80px;
    height: 80px;
}
`;
export default NewMeeting;

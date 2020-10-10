import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {
	const pathname = window.location.pathname;
	return (
		<Wrapper>
			<Logo>Minutes</Logo>
			<Category>
				<RouterLink to='/' pathname={pathname === '/' ? 'on' : 'off'}>Today</RouterLink><span>|</span>
				<RouterLink to='/event' pathname={pathname === '/events' ? 'on' : 'off'}>Upcoming & past</RouterLink>
			</Category>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: inline-flex;
	width: 100%;
	height: 82px;
	padding-top: 62px;
`;

const Logo = styled.div`
	font-size: 50px;
	font-weight: 700;
	line-height: 82px;
	vertical-align: center;
	margin-left: 100px;
	margin-right: auto;
`;

const Category = styled.div`
	display: inline-flex;
	
	span {
		vertical-align: center;
		margin: auto 0;
	}
`;

const RouterLink = styled(Link)`
	margin: auto 50px;
	vertical-align: center;
	text-decoration: none;
	color: ${props => props.pathname === 'on' ? '#1089FF' : '#23374d'};
	font-weight: 700;
	
	
	:hover {
		color: #1089FF;
		cursor: pointer;
	}
`;

export default Header;

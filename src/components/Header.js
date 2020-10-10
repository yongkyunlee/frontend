import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<Wrapper>
			<Logo>Minutes</Logo>
			<Category>
				<Link to='/'>Today</Link>
				<Link to='/event'>Upcoming & past</Link>
			</Category>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: inline-flex;
	width: 100%;
	height: 82px;
	border: 1px solid black;
`;

const Logo = styled.div`
	font-size: 50px;
	font-weight: 700;
	line-height: 82px;
	vertical-align: center;
	margin-left: 100px;
	margin-right: 166px;
`;

const Category = styled.div`
	display: inline-flex;
	
	a {
		margin: auto 50px;
		vertical-align: center;
	}
`;
export default Header;

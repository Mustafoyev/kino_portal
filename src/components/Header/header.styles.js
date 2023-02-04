import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tmdb from '../../assets/images/tmdb.svg';

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 40px;
	background-color: #969696;
`;

export const StyledHeaderWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledLogo = styled(Link)`
	display: block;
	margin-right: 60px;
`;

export const StyledLogoImg = styled.img.attrs({
	src: `${tmdb}`,
	alt: 'Logo',
	width: 100,
	height: 60,
})`
	display: block;
`;

export const StyledNav = styled.nav``;

export const StyledList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	align-items: center;
`;

export const StyledItem = styled.li`
	margin-right: 20px;
`;

export const StyledItemLink = styled(Link)`
	position: relative;
	display: block;
	font-weight: 800;
	font-size: 18px;
	text-decoration: none;
	color: #000;
	font-family: sans-serif;
	text-transform: uppercase;
	transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	transition-duration: 400ms;
	transition-property: color;

	&:focus,
	&:hover {
		color: #fff;
	}

	&:focus:after,
	&:hover:after {
		width: 100%;
		left: 0%;
	}

	&:after {
		content: '';
		pointer-events: none;
		bottom: -2px;
		left: 50%;
		position: absolute;
		width: 0%;
		height: 2px;
		background-color: #fff;
		transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
		transition-duration: 400ms;
		transition-property: width, left;
	}
`;

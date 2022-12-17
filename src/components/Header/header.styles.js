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
	display: block;
	font-weight: 600;
	font-size: 18px;
	text-decoration: none;
	color: #000;
`;

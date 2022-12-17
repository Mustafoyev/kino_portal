import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCardItem = styled.li`
	position: relative;
	width: 300px;
	padding: 20px;
	border-radius: 12px;
	background-color: #969696;
	box-shadow: rgba(67, 71, 85, 0.2) 0px 0px 5.6px 0px,
		rgba(90, 125, 188, 0.05) 0px 5.6px 8px 0px;
`;

export const StyledCardLink = styled(Link)`
	display: block;
	text-decoration: none;
`;

export const StyledAvarage = styled.span`
	position: absolute;
	top: 8px;
	right: 8px;
	width: 30px;
	height: 30px;
	padding: 4px;
	font-weight: 500;
	font-size: 18px;
	text-align: center;
	background-color: orange;
	border-radius: 50%;
`;

export const StyledItemImg = styled.img`
	display: block;
`;

export const StyledItemTitle = styled.h3`
	margin: 10px 0 6px 0;
	font-size: 18px;
	line-height: 100%;
	color: #000;
`;

export const StyledItemTime = styled.time`
	display: block;
	margin-bottom: 6px;
	font-weight: 500;
	font-size: 18px;
	line-height: 100%;
	color: #000;
`;

export const StyledItemCount = styled.p`
	margin: 0;
	font-weight: 500;
	font-size: 18px;
	line-height: 100%;
	color: #000;
`;

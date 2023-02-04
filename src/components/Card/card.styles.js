import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCardItem = styled.li`
	position: relative;
	width: 300px;
	padding: 20px;
	border-radius: 12px;
	background-color: #07182e;
	box-shadow: rgba(67, 71, 85, 0.2) 0px 0px 5.6px 0px,
		rgba(90, 125, 188, 0.05) 0px 5.6px 8px 0px;
	display: flex;
	place-content: center;
	place-items: center;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		width: 100px;
		background-image: linear-gradient(
			180deg,
			rgb(0, 183, 255),
			rgb(255, 48, 255)
		);
		height: 130%;
		animation: rotBGimg 5s linear infinite;
		transition: all 0.2s linear;
	}

	@keyframes rotBGimg {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	&::after {
		content: '';
		position: absolute;
		background: #07182e;
		inset: 5px;
		border-radius: 15px;
	}

	&:hover:before {
		background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
		animation: rotBGimg 3.5s linear infinite;
	}
`;

export const StyledCardLink = styled(Link)`
	display: block;
	text-decoration: none;
	z-index: 1;
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
	color: #fff;
`;

export const StyledItemTime = styled.time`
	display: block;
	margin-bottom: 6px;
	font-weight: 500;
	font-size: 18px;
	line-height: 100%;
	color: #fff;
`;

export const StyledItemCount = styled.p`
	margin: 0;
	font-weight: 500;
	font-size: 18px;
	line-height: 100%;
	color: #fff;
`;

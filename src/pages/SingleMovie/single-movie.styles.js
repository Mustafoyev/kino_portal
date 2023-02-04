import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLoader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const StyledSingleMovie = styled.div`
	height: 100vh;
	padding: 30px;
	background-image: ${(props) =>
		props.img
			? `url(https://image.tmdb.org/t/p/original/${props.img})`
			: 'url(https://via.placeholder.com/300)'};
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center top;
`;

export const StyledCastWrapper = styled.div`
	width: 700px;
	margin-right: auto;
`;

export const StyledCastItem = styled.div`
	& + & {
		margin-left: 10px;
	}
`;

export const StyledCastItemLink = styled(Link)`
	display: block;
	width: 80px;
	height: 120px;
	text-decoration: none;
	cursor: pointer;
`;

export const StyledCastImgWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 120px;
	background-color: #fff;
	border-radius: 6px;
`;

export const StyledCastItemImg = styled.img`
	display: block;
	border-radius: 6px;
`;

export const StyledSignleCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
`;

export const StyledSingleImgLinkWrapper = styled.div``;

export const StyledTrailerLink = styled(Link)`
	position: relative;
	display: block;
	width: 180px;
	margin-top: 8px;
	padding: 1em 1.8em;
	border-radius: 6px;
	text-align: center;
	text-decoration: none;
	color: #fff;
	outline: none;
	border: 1px solid #303030;
	background-color: #212121;
	color: #ae00ff;
	letter-spacing: 2px;
	font-size: 15px;
	font-weight: bold;
	overflow: hidden;
	transition: 0.2s;
	border-radius: 20px;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
		transition-delay: 0.6s;
		> :nth-child(1) {
			left: 100%;
			transition: 0.7s;
		}
		> :nth-child(3) {
			right: 100%;
			transition: 0.7s;
			transition-delay: 0.35s;
		}
		> :nth-child(2) {
			top: 100%;
			transition: 0.7s;
			transition-delay: 0.17s;
		}
		> :nth-child(4) {
			bottom: 100%;
			transition: 0.7s;
			transition-delay: 0.52s;
		}
	}

	&:active {
		background: #ae00af;
		background: linear-gradient(to top right, #ae00af, #001eff);
		color: #bfbfbf;
		box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
		transition: 0.1s;

		> :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) {
			transition: none;
			transition-delay: none;
		}
	}
`;

export const StyledTrailerSpan = styled.span`
	position: absolute;
	&:nth-child(1) {
		top: 0;
		left: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, #ae00ff);
	}

	&:nth-child(3) {
		bottom: 0;
		right: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, transparent, #001eff);
	}

	&:nth-child(2) {
		top: -100%;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(180deg, transparent, #ae00ff);
	}

	&:nth-child(4) {
		bottom: -100%;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(360deg, transparent, #001eff);
	}
`;

export const StyledSignleImg = styled.img`
	display: block;
	margin-right: 40px;
	border-radius: 20px;
`;

export const StyledSignleContent = styled.div`
	width: 400px;
`;

export const StyledSignleTitle = styled.h2`
	margin: 0;
	margin-bottom: 10px;
	color: yellow;
`;

export const StyledSignleText = styled.p`
	margin: 0;
	margin-bottom: 10px;
	color: yellow;
`;

export const StyledSignleBudget = styled.ins`
	display: block;
	margin-bottom: 10px;
	text-decoration: none;
	color: yellow;
`;

export const StyledSignleRelise = styled.time`
	display: block;
	margin-bottom: 10px;
	color: yellow;
`;

export const StyledSignleAverage = styled.ins`
	display: block;
	margin-bottom: 10px;
	text-decoration: none;
	color: yellow;
`;

export const StyledSignleCount = styled.ins`
	display: block;
	margin-bottom: 10px;
	text-decoration: none;
	color: yellow;
`;

export const StyledSignleGenre = styled.span`
	display: inline-block;
	margin-right: 5px;
	color: yellow;
`;

export const StyledRecWrapper = styled.div`
	width: 700px;
	margin-left: auto;
`;

export const StyledRecItem = styled.li`
	& + & {
		margin-left: 10px;
	}
`;

export const StyledRecImgWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 120px;
	background-color: #fff;
	border-radius: 6px;
`;

export const StyledRecItemLink = styled(Link)`
	display: block;
	width: 80px;
	height: 120px;
	text-decoration: none;
	cursor: pointer;
`;

export const StyledRecItemImg = styled.img`
	display: block;
	border-radius: 6px;
`;

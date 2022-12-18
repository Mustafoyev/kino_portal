import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledPersonWrapper = styled.div`
	padding: 40px;
	background-color: #f0ead6;
`;

export const StyledPersonContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledPersonImg = styled.img`
	display: block;
	margin-right: 40px;
	border-radius: 20px;
	object-fit: cover;
`;

export const StyledPersonInfo = styled.div`
	width: 800px;
`;

export const StyledPersonTitle = styled.h2`
	margin: 0;
	margin-bottom: 10px;
	font-size: 38px;
	color: #000;
`;

export const StyledPersonBirth = styled.time`
	display: block;
	font-size: 18px;
	margin-bottom: 10px;
	color: #000;
	opacity: 0.7;
`;

export const StyledPersonPlace = styled.p`
	margin: 0;
	margin-bottom: 10px;
	font-size: 18px;
	color: #000;
	opacity: 0.7;
`;

export const StyledPersonPopular = styled.ins`
	display: block;
	margin-bottom: 10px;
	font-size: 18px;
	color: #000;
	opacity: 0.7;
	text-decoration: none;
`;

export const StyledPersonBiography = styled.p`
	margin: 0;
	font-size: 18px;
	color: #000;
	opacity: 0.7;
	text-decoration: none;
`;

export const StyledPersonMovieWrapper = styled.div`
	margin-top: 40px;
`;

export const StyledPersonMovieList = styled.div`
	margin: 0 auto;
	width: 800px;
`;

export const StyledPersonMovieItem = styled.div``;

export const StyledPersonMovieLink = styled(Link)`
	display: block;
	cursor: pointer;
`;

export const StyledPersonMovieImg = styled.img`
	display: block;
	object-fit: cover;
	border-radius: 6px;
`;

export const StyledPersonMovieImgWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 120px;
	background-color: #fff;
	border-radius: 6px;
`;

import styled from 'styled-components';

export const StyledSingleMovie = styled.div`
	height: 100vh;
	padding: 40px;
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
	margin: 40px 0;
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

export const StyledRecItemImg = styled.img`
	display: block;
	border-radius: 6px;
`;

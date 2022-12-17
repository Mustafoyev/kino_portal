import { baseImageURL } from '../../API/API';
import {
	StyledAvarage,
	StyledCardItem,
	StyledCardLink,
	StyledItemCount,
	StyledItemImg,
	StyledItemTime,
	StyledItemTitle,
} from './card.styles';

export const Card = ({ obj }) => {
	return (
		<StyledCardItem>
			<StyledCardLink to={`/movie/${obj.id}`}>
				<StyledAvarage>{obj?.vote_average}</StyledAvarage>
				<StyledItemImg src={baseImageURL + obj?.poster_path} />
				<StyledItemTitle>{obj?.title}</StyledItemTitle>
				<StyledItemTime>{obj?.release_date}</StyledItemTime>
				<StyledItemCount>Vote count: {obj?.vote_count}</StyledItemCount>
			</StyledCardLink>
		</StyledCardItem>
	);
};

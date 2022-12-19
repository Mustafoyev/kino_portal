import { useContext } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { baseVideoURL } from '../../API/API';
import { TrailerContext } from '../../context/TrailerContext/trailer-context.component';
import { StyledLoader } from '../SingleMovie/single-movie.styles';
import {
	StyledTrailerIframe,
	StyledTrailerItem,
	StyledTrailerList,
	StyledTrailerWrapper,
} from './trailer.styles';

export const Trailer = () => {
	const { video } = useContext(TrailerContext);

	return (
		<StyledTrailerWrapper>
			{video.length ? (
				<StyledTrailerList>
					{video.map((el) => (
						<StyledTrailerItem>
							<StyledTrailerIframe
								src={baseVideoURL + el?.key}
								width={400}
								height={300}
								title={el?.name}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen></StyledTrailerIframe>
						</StyledTrailerItem>
					))}
				</StyledTrailerList>
			) : (
				<StyledLoader>
					<BallTriangle
						margin='auto auto'
						height={100}
						width={100}
						radius={5}
						color='#4fa94d'
						ariaLabel='ball-triangle-loading'
						wrapperClass={{}}
						wrapperStyle=''
						visible={true}
					/>
				</StyledLoader>
			)}
		</StyledTrailerWrapper>
	);
};

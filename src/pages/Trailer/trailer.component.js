import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { apis, baseVideoURL } from '../../API/API';
import { StyledLoader } from '../SingleMovie/single-movie.styles';
import {
	StyledTrailerIframe,
	StyledTrailerItem,
	StyledTrailerList,
	StyledTrailerWrapper,
} from './trailer.styles';

export const Trailer = () => {
	const { id } = useParams();
	const [trailer, setTrailer] = useState([]);

	const getMovieTriler = async (movieId) => {
		const res = await apis.getMovieTriler(movieId);
		setTrailer(res.data.results);
	};

	useEffect(() => {
		getMovieTriler(id);
	}, [id]);

	return (
		<StyledTrailerWrapper>
			{trailer.length ? (
				<StyledTrailerList>
					{trailer.map((el) => (
						<StyledTrailerItem key={el.id}>
							<StyledTrailerIframe
								src={baseVideoURL + el?.key}
								width={400}
								height={300}
								title={el?.name}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen></StyledTrailerIframe>
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

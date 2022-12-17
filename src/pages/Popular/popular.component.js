import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { apis } from '../../API/API';
import { Card } from '../../components/Card/card.component';
import { StyledHomeList, StyledHomeWrapper } from '../Home/home.styles';
import { StyledLoader } from '../SingleMovie/single-movie.styles';

export const Popular = () => {
	const [movies, setMovies] = useState([]);

	const getPopularMovies = async () => {
		const res = await apis.getPopularMovies();
		setMovies(res.data.results);
	};

	useEffect(() => {
		getPopularMovies();
	}, []);

	return (
		<StyledHomeWrapper>
			{movies.length ? (
				<StyledHomeList>
					{movies.map((el) => (
						<Card key={el.id} obj={el} />
					))}
				</StyledHomeList>
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
		</StyledHomeWrapper>
	);
};

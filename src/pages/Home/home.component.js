import { useEffect, useState } from 'react';
import { apis } from '../../API/API';
import { Card } from '../../components/Card/card.component';
import { StyledHomeList, StyledHomeWrapper } from './home.styles';

export const Home = () => {
	const [movies, setMovies] = useState([]);

	const getNowPlayingMovie = async () => {
		const res = await apis.getNowPlayingMovies();
		setMovies(res.data.results);
	};

	useEffect(() => {
		getNowPlayingMovie();
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
				''
			)}
		</StyledHomeWrapper>
	);
};

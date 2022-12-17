import { useEffect, useState } from 'react';
import { apis } from '../../API/API';
import { Card } from '../../components/Card/card.component';
import { StyledHomeList, StyledHomeWrapper } from '../Home/home.styles';

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
				''
			)}
		</StyledHomeWrapper>
	);
};

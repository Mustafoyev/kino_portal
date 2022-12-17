import { useEffect, useState } from 'react';
import { apis } from '../../API/API';
import { Card } from '../../components/Card/card.component';
import { StyledHomeList, StyledHomeWrapper } from '../Home/home.styles';

export const UpComing = () => {
	const [movies, setMovies] = useState([]);

	const getUpComingMovies = async () => {
		const res = await apis.getUpComingMovies();
		setMovies(res.data.results);
	};

	useEffect(() => {
		getUpComingMovies();
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

import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { apis } from '../../API/API';
import { Card } from '../../components/Card/card.component';
import { PaginationComponent } from '../../components/PaginationComponent/pagination.component';
import { StyledHomeList, StyledHomeWrapper } from '../Home/home.styles';
import { StyledLoader } from '../SingleMovie/single-movie.styles';

export const UpComing = () => {
	const [movies, setMovies] = useState([]);
	const [pages, setPages] = useState();
	const [total, setTotal] = useState();

	const getUpComingMovies = async (pageNum) => {
		const res = await apis.getUpComingMovies(pageNum);
		setMovies(res.data.results);
		setTotal(res.data.total_pages);
	};

	useEffect(() => {
		getUpComingMovies(pages);
	}, [pages]);

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
			<PaginationComponent setPages={setPages} totalPages={total} />
		</StyledHomeWrapper>
	);
};

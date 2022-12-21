import { Card } from '../../components/Card/card.component';
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { apis } from '../../API/API';
import { PaginationComponent } from '../../components/PaginationComponent/pagination.component';
import { StyledLoader } from '../SingleMovie/single-movie.styles';
import { StyledSearchList, StyledSearchWrapper } from './search.styles';
import useDebounce from '../../hooks/useDebounce';

export const Search = () => {
	const { searchMovie } = useParams();
	const [searchedMovie, setSearchedMovie] = useState([]);
	const [pages, setPages] = useState();
	const [total, setTotal] = useState();
	const debouncedSearchTerm = useDebounce(searchMovie, 2000);

	const getSearchMovies = async (movie, pageNum) => {
		const res = await apis.getSearchMovies(movie, pageNum);
		setSearchedMovie(res.data.results);
		setTotal(res.data.total_pages);
	};

	useEffect(() => {
		getSearchMovies(debouncedSearchTerm, pages);
	}, [debouncedSearchTerm, pages]);

	return (
		<StyledSearchWrapper>
			{searchedMovie.length ? (
				<StyledSearchList>
					{searchedMovie.map((el) => (
						<Card key={el.id} obj={el} />
					))}
				</StyledSearchList>
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
		</StyledSearchWrapper>
	);
};

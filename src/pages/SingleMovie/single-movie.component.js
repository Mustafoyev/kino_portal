import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apis, baseImageURL } from '../../API/API';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import People from '../../assets/images/people.png';
import Peoples from '../../assets/images/peoples.png';
import { BallTriangle } from 'react-loader-spinner';

import {
	StyledCastImgWrapper,
	StyledCastItem,
	StyledCastItemImg,
	StyledCastItemLink,
	StyledCastWrapper,
	StyledLoader,
	StyledRecImgWrapper,
	StyledRecItem,
	StyledRecItemImg,
	StyledRecItemLink,
	StyledRecWrapper,
	StyledSignleAverage,
	StyledSignleBudget,
	StyledSignleCard,
	StyledSignleContent,
	StyledSignleCount,
	StyledSignleGenre,
	StyledSignleImg,
	StyledSignleRelise,
	StyledSignleText,
	StyledSignleTitle,
	StyledSingleImgLinkWrapper,
	StyledSingleMovie,
	StyledTrailerLink,
} from './single-movie.styles';

export const SingleMovie = () => {
	const { id } = useParams();

	const [movie, setMovie] = useState({});
	const [cast, setCast] = useState({});
	const [rec, setRec] = useState({});

	const getSingleMovie = async (movieId) => {
		const res = await apis.getMovie(movieId);
		setMovie(res.data);
	};

	const getMovieCredits = async (movieId) => {
		const res = await apis.getMovieCredits(movieId);
		setCast(res.data.cast);
	};

	const getRecMovies = async (movieId) => {
		const res = await apis.getRecMovies(movieId);
		setRec(res.data.results);
	};

	useEffect(() => {
		getSingleMovie(id);
		getMovieCredits(id);
		getRecMovies(id);
	}, [id]);

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		arrows: false,
	};

	const setting = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		arrows: false,
		rtl: true,
	};

	return (
		<StyledSingleMovie img={movie?.backdrop_path}>
			{cast.length ? (
				<StyledCastWrapper>
					<Slider {...settings}>
						{cast.map((el) => (
							<StyledCastItem key={el.id}>
								{el.profile_path ? (
									<StyledCastItemLink to={`/person/${el.id}`}>
										<StyledCastItemImg
											src={baseImageURL + el?.profile_path}
											alt={el?.name}
											width={80}
											height={50}
										/>
									</StyledCastItemLink>
								) : (
									<StyledCastImgWrapper>
										<StyledCastItemImg src={People} width={80} height={50} />
									</StyledCastImgWrapper>
								)}
							</StyledCastItem>
						))}
					</Slider>
				</StyledCastWrapper>
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
			<StyledSignleCard>
				<StyledSingleImgLinkWrapper>
					<StyledSignleImg
						src={baseImageURL + movie?.poster_path}
						width={180}
						height={240}
					/>
					<StyledTrailerLink to={`/trailer/${movie.id}`}>
						View Trailer
					</StyledTrailerLink>
				</StyledSingleImgLinkWrapper>
				<StyledSignleContent>
					<StyledSignleTitle>{movie?.title}</StyledSignleTitle>
					<StyledSignleText>{movie?.overview}</StyledSignleText>
					<StyledSignleBudget>Budget: {movie?.budget}</StyledSignleBudget>
					<StyledSignleRelise>
						Release date: {movie?.release_date}
					</StyledSignleRelise>
					<StyledSignleAverage>
						Average: {movie?.vote_average}
					</StyledSignleAverage>
					<StyledSignleCount>Count: {movie?.vote_count}</StyledSignleCount>
					{movie?.genres?.map((el) => (
						<StyledSignleGenre>{el?.name}</StyledSignleGenre>
					))}
				</StyledSignleContent>
			</StyledSignleCard>
			{rec.length ? (
				<StyledRecWrapper>
					<Slider {...setting} dir='rtl'>
						{rec.map((el) => (
							<StyledRecItem key={el.id}>
								{el.poster_path ? (
									<StyledRecItemLink to={`/movie/${el.id}`}>
										<StyledRecItemImg
											src={baseImageURL + el?.poster_path}
											alt={el?.title}
											width={80}
											height={50}
										/>
									</StyledRecItemLink>
								) : (
									<StyledRecImgWrapper>
										<StyledRecItemImg src={Peoples} width={80} height={50} />
									</StyledRecImgWrapper>
								)}
							</StyledRecItem>
						))}
					</Slider>
				</StyledRecWrapper>
			) : (
				''
			)}
		</StyledSingleMovie>
	);
};

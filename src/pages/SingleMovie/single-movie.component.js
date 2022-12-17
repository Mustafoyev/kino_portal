import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apis, baseImageURL } from '../../API/API';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import People from '../../assets/images/people.png';
import Peoples from '../../assets/images/peoples.png';

import {
	StyledCastImgWrapper,
	StyledCastItem,
	StyledCastItemImg,
	StyledCastWrapper,
	StyledRecImgWrapper,
	StyledRecItem,
	StyledRecItemImg,
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
	StyledSingleMovie,
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
							<StyledCastItem>
								{el.profile_path ? (
									<StyledCastItemImg
										src={baseImageURL + el?.profile_path}
										alt={el?.name}
										width={80}
										height={50}
									/>
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
				''
			)}
			<StyledSignleCard>
				<StyledSignleImg
					src={baseImageURL + movie?.poster_path}
					width={180}
					height={240}
				/>
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
							<StyledRecItem>
								{el.poster_path ? (
									<StyledRecItemImg
										src={baseImageURL + el?.poster_path}
										alt={el?.title}
										width={80}
										height={50}
									/>
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

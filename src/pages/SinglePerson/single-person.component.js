import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { apis, baseImageURL } from '../../API/API';
import { StyledLoader } from '../SingleMovie/single-movie.styles';
import {
	StyledPersonBiography,
	StyledPersonBirth,
	StyledPersonContent,
	StyledPersonImg,
	StyledPersonInfo,
	StyledPersonMovieImg,
	StyledPersonMovieImgWrapper,
	StyledPersonMovieItem,
	StyledPersonMovieLink,
	StyledPersonMovieList,
	StyledPersonMovieWrapper,
	StyledPersonPlace,
	StyledPersonPopular,
	StyledPersonTitle,
	StyledPersonWrapper,
} from './single-person.styles';

import Peoples from '../../assets/images/peoples.png';

export const SinglePerson = () => {
	const { id } = useParams();
	const [person, setPerson] = useState({});
	const [personMovie, setPersonMovie] = useState([]);

	const getPerson = async (personId) => {
		const res = await apis.getPerson(personId);
		setPerson(res.data);
	};

	const getPersonMovies = async (personMovieId) => {
		const res = await apis.getPersonMovies(personMovieId);
		setPersonMovie(res.data.cast);
	};

	useEffect(() => {
		getPerson(id);
		getPersonMovies(id);
	}, [id]);

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
	};

	return (
		<StyledPersonWrapper>
			{person ? (
				<StyledPersonContent>
					<StyledPersonImg
						src={baseImageURL + person?.profile_path}
						alt={person.name}
						width={300}
						height={400}
					/>
					<StyledPersonInfo>
						<StyledPersonTitle>{person?.name}</StyledPersonTitle>
						<StyledPersonBirth>Birthday: {person?.birthday}</StyledPersonBirth>
						<StyledPersonPlace>
							Place of birth: {person?.place_of_birth}
						</StyledPersonPlace>
						<StyledPersonPopular>
							Popularity: {person?.popularity}
						</StyledPersonPopular>
						<StyledPersonBiography>
							Biography: {person?.biography}
						</StyledPersonBiography>
					</StyledPersonInfo>
				</StyledPersonContent>
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

			<StyledPersonMovieWrapper>
				{personMovie.length ? (
					<StyledPersonMovieList>
						<Slider {...setting}>
							{personMovie.map((el) => (
								<StyledPersonMovieItem key={el.id}>
									{el.poster_path ? (
										<StyledPersonMovieLink to={`/movie/${el.id}`}>
											<StyledPersonMovieImg
												src={baseImageURL + el?.poster_path}
												alt={el?.title}
												width={80}
												height={50}
											/>
										</StyledPersonMovieLink>
									) : (
										<StyledPersonMovieImgWrapper>
											<StyledPersonMovieImg
												src={Peoples}
												width={80}
												height={50}
											/>
										</StyledPersonMovieImgWrapper>
									)}
								</StyledPersonMovieItem>
							))}
						</Slider>
					</StyledPersonMovieList>
				) : (
					''
				)}
			</StyledPersonMovieWrapper>
		</StyledPersonWrapper>
	);
};

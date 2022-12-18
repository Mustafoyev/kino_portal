import axios from 'axios';

const API_KEY = 'e6bf0915b364df427bb83341ef7c07ac';
const baseURL = 'https://api.themoviedb.org/3/';
export const baseImageURL = 'https://image.tmdb.org/t/p/w500/';

export const apis = {
	getNowPlayingMovies: () =>
		axios.get(baseURL + 'movie/now_playing?', {
			params: {
				api_key: API_KEY,
			},
		}),

	getPopularMovies: () =>
		axios.get(baseURL + 'movie/popular?', {
			params: {
				api_key: API_KEY,
			},
		}),

	getUpComingMovies: () =>
		axios.get(baseURL + 'movie/upcoming?', {
			params: {
				api_key: API_KEY,
			},
		}),

	getMovie: (id) =>
		axios.get(baseURL + '/movie/' + id, {
			params: {
				api_key: API_KEY,
			},
		}),

	getMovieCredits: (id) =>
		axios.get(baseURL + `/movie/${id}/credits`, {
			params: {
				api_key: API_KEY,
			},
		}),

	getRecMovies: (id) =>
		axios.get(baseURL + `/movie/${id}/recommendations`, {
			params: {
				api_key: API_KEY,
			},
		}),

	getPerson: (id) =>
		axios.get(baseURL + `/person/${id}`, {
			params: {
				api_key: API_KEY,
			},
		}),

	getPersonMovies: (id) =>
		axios.get(baseURL + `/person/${id}/movie_credits`, {
			params: {
				api_key: API_KEY,
			},
		}),
};

const API_KEY = `8b6cf915ee4b9af792d93ab4321df6b4`;
const BASE_URL = `https://api.themoviedb.org/3`;


export interface IResults {
  dates: {
    maximum: number;
    minimum: number;
  };
  results: ISliderCommon[];
  total_pages: number;
  total_results: number;
}

export interface ISliderCommon {
  id: number;
  title: string;
  name: string;
  first_air_date: string;
  original_language: string;
  overview: string;
  vote_average: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovieDetail {
  backdrop_path: string;
  poster_path: string;
  genres: IGenres[];
  overview: string;
  vote_average: number;
  runtime: number;
  release_date: string;
  title: string;
  tagline: string;
}

interface IGenres {
  id: number;
  name: string;
}

export interface ICredit {
  cast: ICast[];
}

export interface ICast {
  id: number;
  name: string;
}

interface IGenres {
  id: number;
  name: string;
}

export interface ITvDetail {
  adult: boolean;
  id: number;
  name: string;
  genres: IGenres[];
  first_air_date: string;
  last_air_date: string;
  episode_run_time: number;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  tagline: string;
}

export interface ITv {
  name: string;
  genres: IGenres[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

export interface ITvResults {
  results: ITv[],
}

export interface ISearch {
  results: ISliderCommon[];
}


// movie

export function getNowPlaying() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
    .then(response => response.json());
}

export function getPopular() {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`)
    .then(response => response.json());
}

export function getUpcoming() {
  return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=1`)
    .then(response => response.json());
}

export function getMovieDetail(movieId?: string) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(response => response.json());
}

export function getCredits(movieId?: string) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.json());
}

export function getSimilar(movieId?: string) {
  return fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&page=1`)
    .then(response => response.json());
}


// tv show

export function getTvOnAir() {
  return fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&page=1`)
    .then(response => response.json());
}

export function getTvTopRate() {
  return fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json());
}

export function getTvDetail(tvId?: string) {
  return fetch(`${BASE_URL}/tv/${tvId}?api_key=${API_KEY}`)
    .then(response => response.json());
}

export function getTvCredits(tvId?: string) {
  return fetch(`${BASE_URL}/tv/${tvId}/credits?api_key=${API_KEY}&page=1`)
    .then(response => response.json());
}

export function getTvSimilar(tvId?: string) {
  return fetch(`${BASE_URL}/tv/${tvId}/similar?api_key=${API_KEY}&page=1`)
    .then(response => response.json());
}


// search

export function getSearch(keyword: string | null) {
  return fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${keyword}`)
    .then(response => response.json());
}

export function getSearchTv(keyword: string | null) {
  return fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${keyword}`)
    .then(response => response.json());
}

export function getSearchMovie(keyword: string | null) {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`)
    .then(response => response.json());
}
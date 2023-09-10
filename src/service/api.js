import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
    api_key: `d720ab11f572566eb478fc23a44c048f`,
    include_adult: false,
};

// Запит на отримання найпопулярніших фільмів на сьогодні
export const getTrendingMovies = async (page = 1) => {
    try {
        const { data } = await axios.get("/trending/movie/day", {
            params: {
                page,
            },
        });
        return data;
    } catch (error) {
        throw error;
    }
};

// Запит на пошук фільму за ключовим словом
export const searchMovies = async (page = 1, query = '') => {
    try {
        const url = query
            ? "/search/movie" 
            : "/trending/movie/day";
            
        const { data } = await axios.get(url, {
            params: {
                page,
                query,
            },
        });
        return data;
    } catch (error) {
        throw error;
    }
};

// Запит на отримання повної інформації про фільм
export const getMovieDetails = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}`);
        return data;
    } catch (error) {
        throw error;
    }
};

// Запит на отримання інформації про акторський склад
export const getMovieCredits = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}/credits`);
        return data.cast;
    } catch (error) {
        throw error;
    }
};

// Запит на отримання оглядів про фільм
export const getMovieReviews = async (movieId) => {
    try {
        const { data } = await axios.get(`/movie/${movieId}/reviews`);
        return data.results;
    } catch (error) {
        throw error;
    }
};
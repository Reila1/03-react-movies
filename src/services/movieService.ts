import { Movie } from "../types/movie";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const response = await axios.get(
        `${BASE_URL}/search/movie`,
        {
            params: {
                query: query,
            },
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        }
    );
    return response.data.results;
}
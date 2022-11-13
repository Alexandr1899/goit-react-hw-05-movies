import axios from "axios"

const key = "39ff64d18b51eb41d2a739fa48176477"

export function fetchTrending() {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
}
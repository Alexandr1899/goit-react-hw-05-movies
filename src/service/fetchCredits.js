import axios from "axios"

const key = "39ff64d18b51eb41d2a739fa48176477"

export function fetchCredits(id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
}
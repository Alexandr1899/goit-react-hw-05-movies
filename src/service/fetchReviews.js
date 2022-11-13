import axios from "axios"

const key = "39ff64d18b51eb41d2a739fa48176477"

export function fetchReviews(id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
}
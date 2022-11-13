import axios from "axios"

const key = "39ff64d18b51eb41d2a739fa48176477"

export function fetchSearch(query) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`)
}


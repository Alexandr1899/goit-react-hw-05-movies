import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { fetchTrending } from "service/fetchTrending"

export const HomePage = () => {
    const [movies, setMovies] = useState([])
    const isFirstRender = useRef(true)
    const location = useLocation()
    useEffect(() => {
        if (isFirstRender.current) {
            fetchTrending().then(res => {
                setMovies(res.data.results)
        })
        }
        isFirstRender.current = false
    }, [])
    if (!movies) {
        return null
    }
    return <>
        <h1>Trending Today</h1>
        <ul>
            {movies.map(movie => {
                return (<li key={movie.id}><Link to={`/movies/${movie.id}`} state={{from:location}}>{movie.original_title}</Link></li>)
            } )}
        </ul>
    </> 
}
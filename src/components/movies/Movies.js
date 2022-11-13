import { useEffect, useState } from "react"
import { fetchSearch } from "service/fetchSearch"
import { Link, useSearchParams, useLocation } from "react-router-dom"


export const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const queryParam = searchParams.get("query")?? ""
    const [query, setQuery] = useState(queryParam !== "" ? queryParam: "")
    const [moviesList, setMoviesList] = useState([])

    const searchMovie = (evt) => {
        evt.preventDefault()
        const value = evt.target.elements.movie.value
        setQuery(value)
        setSearchParams(value !== "" ? {query:value.toLowerCase().trim()}:{})
        evt.target.reset()
    }
    const location = useLocation()
    useEffect(() => {
        if (query === "") {
            return
        }
        fetchSearch(query).then(res => {
            setMoviesList(res.data.results);
        })
    }, [query])
    return <> 
        <form onSubmit={searchMovie}>
            <input type="text" autoComplete="true" autoFocus name="movie"  />
            <button type="submit">search</button>
        </form>
        <ul>
            {moviesList.map(movie => {
                return (<li key={movie.id}><Link to={`/movies/${movie.id}`} state={{from:location}}>{movie.original_title}</Link></li>)
            } )}
        </ul>
    
    </>
}

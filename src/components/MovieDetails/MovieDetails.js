import { useEffect, useRef, useState } from "react"
import { NavLink, Outlet, useParams, Link, useLocation } from "react-router-dom"
import { fetchDetails } from "service/fetchDetails"
import { DetailsMainBox, DetailsBox, AdditionalBox } from "./MovieDetails.styled"
import { Suspense } from "react"

const posterPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
const MovieDetails = () => {
    const [details, setDetails] = useState(null)
    const { movieId } = useParams()
    const isFirstRender = useRef(true)
    const location = useLocation()
    const backLinkHref = location.state?.from ?? "/"
    useEffect(() => {
        if (isFirstRender.current) {
            fetchDetails(movieId).then(response => {
                setDetails(response.data)
            })
        }
        isFirstRender.current = false
    }, [movieId])
    if (!details) {
        return null
    }
    const genres = []
        details.genres.map(genre => {
            genres.push(genre.name);
            return genres
    })
    return <>
        <button type="button"><Link to={backLinkHref}>Go back</Link></button>
        <DetailsMainBox>
            <img src={`${posterPath}${details.poster_path}`} alt={details.original_title} width="200" />
            <DetailsBox>
                <h1>{ details.original_title }</h1>
        <p>User Score: { details.vote_average }</p>
        <h2>Overview</h2>
        <p>{ details.overview }</p>
                <h3>Genres</h3>
                <p>{genres.join(", ") }</p>
            </DetailsBox>
        </DetailsMainBox>
        <AdditionalBox>
            <p>Additional information</p>
            <ul>
                <li><NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink></li>
                <li><NavLink to={`/movies/${movieId}/review`}>Reviews</NavLink></li>
            </ul>
        </AdditionalBox>
        <Suspense fallback={null}><Outlet /></Suspense>
    </>
}
export default MovieDetails
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchCredits } from "service/fetchCredits"

const posterPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
const Cast = () => {
    const { movieId } = useParams()
    const [castList, setCastList] = useState(null)
    useEffect(() => {
        fetchCredits(movieId).then(res => {
            setCastList(res.data.cast);
        })
    }, [movieId])
    if (!castList) {
        return null
    }
    return <ul>
        {castList.map(item => {
            return <li key={item.id}>
                <img src={ item.profile_path ? `${posterPath}${item.profile_path}` : "https://images.cdn4.stockunlimited.net/preview1300/oops-sorry_1500518.jpg"} alt={ item.name } width="100"/>
                <p>{ item.name }</p>
                <p>Character: { item.character }</p>
    </li>
        })}
    </ul>
}
export default Cast



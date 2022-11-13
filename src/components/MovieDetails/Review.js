import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchReviews } from "service/fetchReviews"

const Review = () => {
    const { movieId } = useParams()
    const [reviewList, setReviewList] = useState(null)
    useEffect(() => {
        fetchReviews(movieId).then(res => {
            setReviewList(res.data.results);
        })
    }, [movieId])
    if (!reviewList) {
        return null
    }
    return reviewList.length > 0 ? <ul>
        {reviewList.map(item => {
            return <li key={item.id}>
            <h3>Author: {item.author}</h3>
                <p>{ item.content }</p>
        </li>
        })}
    </ul> : <p>There is no review</p>
}
export default Review
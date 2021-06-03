import { redditData } from '../../API/contants'
import API from '../../API'

export const Home = () => {

    const getRedditData = () => {
        API.get(redditData).then(result => {
            console.log(result)
        })
    }

    return (
    <div>
        <div>Test App</div>
        <button onClick={getRedditData}>Go</button>
    </div>
    )
}
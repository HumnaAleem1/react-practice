import { redditData } from '../../API/Constants'
import { get } from '../../API/API'

export const Home = () => {

    const getRedditData = async() => {
        const response = await get(redditData)
        console.log(response)
    }

    return (
    <div>
        <div>Test App</div>
        <button onClick={getRedditData}>Go</button>
    </div>
    )
}
import { redditData } from '../../API/contants'
import axiosInstance from '../../API'

const Home = () => {

    const getRedditData = () => axiosInstance.get(redditData).then(result => {
        console.log(result)
    })

    return (
    <div>
        <div>Test App</div>
        <button onClick={getRedditData}>Go</button>
    </div>
    )
}

export default Home
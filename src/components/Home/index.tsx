import { redditData } from '../../API/contants'
import axiosInstance from '../../API'

const Home = () => {

    const getRedditData = async() => {
        const response = await axiosInstance.get(redditData)
        console.log(response)
    }

    return (
    <div>
        <div>Test App</div>
        <button onClick={getRedditData}>Go</button>
    </div>
    )
}

export default Home
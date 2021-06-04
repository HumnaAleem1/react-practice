import { useState } from 'react'
import { redditData } from '../../API/contants'
import axiosInstance from '../../API'
import Table from '../Table'

const Home = () => {
    const [data, setData] = useState<RedditData['data']['children']>()

    const getRedditData = async() => {
        const response = await axiosInstance.get(redditData)
        setData(response?.data?.children)
    }

    return (
    <div>
        <div>Test App</div>
        <button onClick={getRedditData}>Go</button>
        {
            data && <Table data={data}/>
        }
    </div>
    )
}

export default Home
import { redditData } from '../../API/contants'
import API from '../../API'
import Table from '../Table'
import { useState } from 'react'

const Home = () => {
    const [reddit, setReddit] = useState<RedditData['data']['children']>()

     const getRedditData = () => {
        API.get(redditData).then((result) => {
            setReddit(result?.data?.children)
        })
    }

    return (
    <div>
        <div>Test App</div>
        <button onClick={getRedditData}>Go</button>
        {
            reddit && <Table data={reddit}/>
        }
    </div>
    )
}

export default Home
import { useState } from 'react'
import { redditUrl } from '../../API/Constants'
import { get } from '../../API/API'
import { Table } from '../Table'
import { AxiosResponse } from 'axios'

export const Home = () => {
    const [data, setData] = useState<RedditData['data']['children']>()

    const getRedditData = async() => {
        const response: AxiosResponse = await get(redditUrl)
        setData(response?.data?.data?.children)
    }

    return (
    <div>
        <div>Test App</div>
        <button onClick={getRedditData}>Go</button>
        { data && <Table data={data}/> }
    </div>
    )
}
import { useState } from 'react'
import { redditUrl } from '../../api/Constants'
import { get } from '../../api/API'
import { Table } from '../table/Table'
import { AxiosResponse } from 'axios'
import { IRedditData } from "../../RedditInterfaces"

export const Home = () => {
    const [authorData, setAuthorData] = useState<IRedditData['data']['children']>()

    const getRedditData = async() => {
        const response: AxiosResponse = await get(redditUrl)
        setAuthorData(response?.data?.data?.children)
    }

    return (
    <div>
        <div>Test App</div>
        <button onClick={getRedditData}>Go</button>
        { authorData && <Table authorData={authorData}/> }
    </div>
    )
}
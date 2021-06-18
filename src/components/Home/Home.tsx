import { useState } from 'react'
import { redditUrl } from '../../API/Constants'
import { get } from '../../API/API'
import { Table } from '../Table/Table'
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
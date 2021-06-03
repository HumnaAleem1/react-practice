import { redditData } from '../../API/contants'
import API from '../../API'
import { Table } from '../Table'

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
        <Table />
    </div>
    )
}
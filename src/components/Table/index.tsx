import { useState } from 'react'
import Card from '../Card/Card'
import './Table.css'

interface Props {
	data: RedditData['data']['children']
}

interface States {
    displayCard: boolean
    authorName: string
    title: string
}

const Table: React.FC<Props> = ({ data }) => {

    const [state, setState] = useState<States>({
        displayCard: false,
        authorName: '',
        title: ''
    })

    const showDetail = (authorName: string, title: string) => {
        setState({
            displayCard: true,
            authorName,
            title
        })
    }

    const { displayCard, authorName, title } = state

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Sr #</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((childData, index) => {
                            const { author, title } = childData.data
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{author}</td>
                                    <td>{title}</td>
                                    <td>
                                        <button onClick={() => showDetail(author, title)}>Detail</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                displayCard && <Card authorName={authorName} title={title}/>
            }
        </>
    )
}

export default Table
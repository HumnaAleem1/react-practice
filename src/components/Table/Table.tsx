import { useState } from 'react'
import { Card } from '../card/Card'
import { ITableStates } from "../TableInterfaces"
import { IRedditData } from "../../RedditInterfaces"
import './Table.css'

interface ITableProps {
	authorData: IRedditData['data']['children']
}

export const Table: React.FC<ITableProps> = ({ authorData }) => {

    const [state, setState] = useState<ITableStates>({
        displayCard: false,
        authorName: '',
        title: ''
    })

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
                        authorData?.map((childData, index) => {
                            const { author, title } = childData?.data
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{author}</td>
                                    <td>{title}</td>
                                    <td>
                                        <button onClick={() => setState({ displayCard: true, authorName, title })}>
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            { displayCard && <Card {...state}/> }
        </>
    )
}
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
        cards: {}
    })

    const { displayCard, cards } = state

    const getCards = () => {
        return (
            Object.entries(cards).map(([cardId, card]) => {
                return <Card key={cardId} {...card}/>
            })
        )
    }

    const displayDetail = (authorName: string, title: string, cardNumber: number) => {
        setState({
            ...state,
            displayCard: true,
            cards: {...state.cards, [cardNumber]: { authorName, title}}
            
        })
    }

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
                                        <button onClick={() => displayDetail(author, title, index)}>
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            { displayCard && getCards() }
        </>
    )
}
import { useState, FC } from 'react'
import { Card } from '../card/Card'
import { ICard } from "../TableInterfaces"
import { IRedditData } from "../../RedditInterfaces"
import './Table.css'

interface ITableProps {
    authorData: IRedditData['data']['children']
}

export const Table: FC<ITableProps> = ({ authorData }) => {

    const [cards, setCards] = useState<ICard[]>([])

    const getCards = () => {
        return (
            cards.map(card => {
                return <Card key={card.cardId} card={card} deleteCard={deleteCard} />
            })
        )
    }

    const displayDetail = (authorName: string, title: string, cardId: string) => 
        setCards([...cards, { authorName, title, cardId}])

    const deleteCard = (cardId: string) => {
        const filteredCards = cards.filter(card => card.cardId !== cardId)
        setCards(filteredCards)
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
                        authorData?.map((childData) => {
                            const { author, title, id } = childData?.data
                            return (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{author}</td>
                                    <td>{title}</td>
                                    <td>
                                        <button onClick={() => displayDetail(author, title, id)}>
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            { cards && getCards() }
        </>
    )
}
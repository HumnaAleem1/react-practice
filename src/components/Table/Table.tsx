import { useState, FC } from 'react'
import { Card } from '../card/Card'
import { ICards } from "../TableInterfaces"
import { IRedditData } from "../../RedditInterfaces"
import './Table.css'

interface ITableProps {
    authorData: IRedditData['data']['children']
}

export const Table: FC<ITableProps> = ({ authorData }) => {

    const [cards, setCards] = useState<ICards>()

    const getCards = () => {
        return (
            Object.values(cards ?? {}).map(card => {
                return <Card key={card.cardId} card={card} deleteCard={deleteCard} />
            })
        )
    }

    const displayDetail = (authorName: string, title: string, cardId: string) => 
        setCards({...cards, [cardId]: { authorName, title, cardId}})

    const deleteCard = (cardId: string) => {
        const tempCards = {...cards}
        delete tempCards?.[cardId]
        setCards(tempCards)
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
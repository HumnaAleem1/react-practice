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
            cards?.map((card, index) => {
                return <Card key={index} index={index} card={card} deleteCard={deleteCard} />
            })
        )
    }

    const displayDetail = (authorName: string, title: string) => 
        setCards([...cards, { authorName, title}])

    const deleteCard = (index: number) => {
        const tempCards = [...cards]
        tempCards?.splice(index, 1)
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
                        authorData?.map((childData, index) => {
                            const { author, title } = childData?.data
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{author}</td>
                                    <td>{title}</td>
                                    <td>
                                        <button onClick={() => displayDetail(author, title)}>
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
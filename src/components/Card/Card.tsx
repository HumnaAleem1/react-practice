import { FC } from 'react'
import { ICard } from "../TableInterfaces"
import './Card.css'

interface ICardProps {
    card: ICard
    index: number
    deleteCard: (index: number) => void
}

export const Card: FC<ICardProps> = ({ card, index, deleteCard }) => {
    const { authorName, title } = card
    return (
        <div className="card-container">
            <div className="card">
                <div>Author</div><br/>
                <div>{authorName}</div>
                <div>Title</div><br/>
                <div>{title}</div>
                <button onClick={() => deleteCard(index)}>Delete</button>
            </div>
        </div>
    )
}
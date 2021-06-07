import { FC } from 'react'
import { ICard } from "../TableInterfaces"
import './Card.css'

interface ICardProps {
    card: ICard
    deleteCard: (cardId: string) => void
}

export const Card: FC<ICardProps> = ({ card, deleteCard }) => {
    const { authorName, title, cardId } = card
    return (
        <div className="card-container">
            <div className="card">
                <div>Author</div><br/>
                <div>{authorName}</div>
                <div>Title</div><br/>
                <div>{title}</div>
                <button onClick={() => deleteCard(cardId)}>Delete</button>
            </div>
        </div>
    )
}
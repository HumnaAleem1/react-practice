import { ICard } from "../TableInterfaces"
import './Card.css'

interface ICardProps {
    card: ICard
}

export const Card: React.FC<ICardProps> = ({ card }) => {
    const { authorName, title, cardId } = card
    return (
        <div className="card-container">
            <div className="card">
                <div>Author</div><br/>
                <div>{authorName}</div>
                <div>Title</div><br/>
                <div>{title}</div>
                <button>Delete</button>
            </div>
        </div>
    )
}
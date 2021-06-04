import { ITableStates } from "../TableInterfaces"
import './Card.css'

interface ICardProps {}

export const Card: React.FC<ICardProps> = ({ ...tableStates }) => {
    const { authorName, title } = tableStates as ITableStates
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
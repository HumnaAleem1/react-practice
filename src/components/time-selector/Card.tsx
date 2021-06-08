import { FC } from 'react'
import '../card/Card.css'

interface ICardProps {
    name: string
}

export const Card: FC<ICardProps> = ({ name }) => {
    return (
        <div className="card-container">
            <div className="card">
               {name}
               <input type='time' />

            </div>
        </div>
    )
}
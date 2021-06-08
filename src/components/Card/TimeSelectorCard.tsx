import { FC } from 'react'
import './Card.css'

interface ICardProps {
    name: string
}

export const TimeSelectorCard: FC<ICardProps> = ({ name }) => {
    return (
        <div className="card-container">
            <div className="card">
               {name}
               <div>
                   Start Time
                    <input type='time'/>
                </div>
                <div>
                    End Time
                    <input type='time' />
                </div>
            </div>
        </div>
    )
}
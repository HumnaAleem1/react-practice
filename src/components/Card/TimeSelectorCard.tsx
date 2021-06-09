import { FC, useState } from 'react'
import { ITimestamp } from '../time-selector/TimeSelectorInterfaces'
import moment from 'moment'
import './Card.css'

interface ICardProps {
    name: string
}

export const TimeSelectorCard: FC<ICardProps> = ({ name }) => {

    const [startTime, setStartTime] = useState<string>('')
    const [endTime, setEndTime] = useState<string>('')
    const [timestamp, setTimestamp] = useState<ITimestamp[]>([])

    const getTimestamps = () => {
        return ( 
            timestamp?.map((time, index) => {
                const { startTime, endTime } = time
                return <div key={`${index}${startTime}${endTime}`}>
                    <span>{moment(startTime, "h:mm").format('LT')}</span> - <span>{moment(endTime, "h:mm").format('LT')}</span> 
                    <span onClick={() => deleteTimestamp(index)}>Delete</span>
                </div>
            })
        )
    }

    const deleteTimestamp = (index: number) => {
        timestamp.splice(index, 1)
        setTimestamp([...timestamp])
    }

    return (
        <div className="card-container">
            <div className="card">
               <div>{name}</div>
               <div>
                   Start Time
                    <input type='time' onChange={(e) => setStartTime(e.target.value)}/>
                </div>
                <div>
                    End Time
                    <input type='time' onChange={(e) => setEndTime(e.target.value)}/>
                </div>
                <button onClick={() => setTimestamp([...timestamp, {startTime, endTime}])}>Add Time</button>
                { timestamp && getTimestamps() }
            </div>
        </div>
    )
}
import { FC, useState } from 'react'
import { ICustomTimestamp, ITimestamp } from '../time-selector/TimeSelectorInterfaces'
import { customTimestamp } from '../time-selector/Timestamp'
import moment from 'moment'
import './Card.css'

interface ICardProps {
    name: string
}

export const TimeSelectorCard: FC<ICardProps> = ({ name }) => {

    const [startTime, setStartTime] = useState<string>('')
    const [endTime, setEndTime] = useState<string>('')
    const [timestamp, setTimestamp] = useState<ITimestamp[]>([])
    const [startTimestamp, setStartTimestamp] = useState<ICustomTimestamp>(customTimestamp)
    const [endTimestamp, setEndTimestamp] = useState<ICustomTimestamp>(customTimestamp)


    const getTimestamps = () => {
        return (
            timestamp?.map((time, index) => {
                const { startTime, endTime } = time
                return <div key={`${index}-${name}`}>
                    <span>{moment(startTime, "h:mm").format('LT')}</span> - <span>{moment(endTime, "h:mm").format('LT')}</span>
                    <span onClick={() => deleteTimeSlot(index)}>Delete</span>
                </div>
            })
        )
    }

    const deleteTimeSlot = (index: number) => {
        timestamp.splice(index, 1)
        setTimestamp([...timestamp])
    }

    const addTime = () => {
        setTimestamp([...timestamp, {startTime, endTime}])
        debugger
        delete startTimestamp[startTime]
        delete endTimestamp[endTime]
        // const test = {...startTimestamp}
        // delete test[startTime]
        // const test2 = {...endTimestamp}
        // delete test2[endTime]
        setStartTimestamp(startTimestamp)
        setEndTimestamp(endTimestamp)
    }

    return (
        <div className="card-container">
            <div className="card">
               <div>{name}</div>
               <div>
                    Start Time
                    <select onChange={(e) => setStartTime(e.target.value)}>
                        {
                            Object.keys(startTimestamp ?? {}).map(timestampId => {
                                return <option key={timestampId} value={timestampId}>{timestampId}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    End Time
                    <select onChange={(e) => setEndTime(e.target.value)}>
                    {
                        Object.keys(endTimestamp ?? {}).map(timestampId => {
                            return <option key={timestampId} value={timestampId}>{timestampId}</option>
                        })
                    }
                    </select>
                </div>
                <button onClick={addTime}>Add Time</button>
                { timestamp && getTimestamps() }
            </div>
        </div>
    )
}
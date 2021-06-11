import { FC, useState } from 'react'
import { ITimestamp } from '../time-selector/TimeSelectorInterfaces'
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
    const [startTimestamp, setStartTimestamp] = useState<string[]>([...customTimestamp])
    const [endTimestamp, setEndTimestamp] = useState<string[]>([...customTimestamp])


    const getTimestamps = () => {
        return (
            timestamp?.map((time, index) => {
                const { startTime, endTime } = time || {}
                return time && <div key={`${index}-${name}`}>
                    <span>{startTime}</span> - <span>{endTime}</span> 
                    <span onClick={() => deleteTimeSlot(index)}>Delete</span>
                </div>
            })
        )
    }

    const deleteTimeSlot = (index: number) => {
        const startTime = timestamp[index].startTime
        const endTime = timestamp[index].endTime
        const endTimeIndex = timestamp[index].endTimeIndex
        startTimestamp[index] = startTime
        endTimestamp[endTimeIndex] = endTime
        setStartTimestamp([...startTimestamp])
        timestamp.splice(index, 1)
        setTimestamp([...timestamp])
    }
    const addTime = () => {
        const [startTimee, startTimeIndex] = startTime.split('-')
        const [endTimee, endTimeIndex] = endTime.split('-')
        timestamp[parseInt(startTimeIndex)] = {startTime: startTimee, endTime: endTimee, endTimeIndex: parseInt(endTimeIndex)}
        setTimestamp([...timestamp])
        //remove timestamps which has been used/booked
        startTimestamp[parseInt(startTimeIndex)] = ''
        endTimestamp[parseInt(endTimeIndex)] = ''
        setStartTimestamp([...startTimestamp])
        setEndTimestamp([...endTimestamp])
    }

    return (
        <div className="card-container">
            <div className="card">
               <div>{name}</div>
               <div>
                    Start Time
                    <select onChange={(e) => setStartTime(e.target.value)}>
                        {
                            startTimestamp?.map((timestamp, index) => {
                                if(timestamp !== '') {
                                    return  <option key={`${name}-${timestamp}`} value={`${timestamp}-${index}`}>{timestamp}</option>
                                }
                            })
                        }
                    </select>
                </div>
                <div>
                    End Time
                    <select onChange={(e) => setEndTime(e.target.value)}>
                        {
                            endTimestamp.map((timestamp, index) => {
                                return timestamp && <option key={`${name}-${timestamp}`} value={`${timestamp}-${index}`}>{timestamp}</option>
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
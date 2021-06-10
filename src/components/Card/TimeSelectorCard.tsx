import { FC, useState } from 'react'
import { ITimestamp, ICustomTime } from '../time-selector/TimeSelectorInterfaces'
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
    const [startTimestamp, setStartTimestamp] = useState<string[]>(customTimestamp)
    const [endTimestamp, setEndTimestamp] = useState<string[]>(customTimestamp)


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
        const startTime = timestamp[index].startTime
        const endTime = timestamp[index].endTime
        startTimestamp[index] = startTime
        setStartTimestamp([...startTimestamp])
        //@ts-ignore
        // setStartTimestamp({...startTimestamp, [startTime]: {
        //         time: parseInt(startTime.split(' ')[0].substring(0,2)),
        //         meridiem: startTime.split(' ')[1],
        //     }
        // })
        //@ts-ignore
        // setEndTimestamp({...endTimestamp, [endTime]: {
        //     time: parseInt(endTime.split(' ')[0].substring(0,2)),
        //     meridiem: endTime.split(' ')[1],
        //     }
        // })
        timestamp.splice(index, 1)
        setTimestamp([...timestamp])
    }

    const addTime = () => {
        const startTimeArr = startTime.split('-')[0]
        const endTimeArr = endTime.split('-')[0]
        const startIndex = parseInt(startTime.split('-')[1])
        const endIndex = parseInt(endTime.split('-')[1])
        setTimestamp([...timestamp, timestamp[startIndex] = {startTime: startTimeArr, endTime: endTimeArr}])
        startTimestamp[startIndex] = ''
        endTimestamp[endIndex] = ''
        setStartTimestamp([...startTimestamp])
        setEndTimestamp([...endTimestamp])
        console.log(timestamp, startTimestamp)
    }

    return (
        <div className="card-container">
            <div className="card">
               <div>{name}</div>
               <div>
                    Start Time
                    <select onChange={(e) => setStartTime(e.target.value)}>
                        {
                            startTimestamp.map((timestamp, index) => {
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
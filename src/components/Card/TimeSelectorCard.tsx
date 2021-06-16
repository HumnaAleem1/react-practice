import { FC, useState, ChangeEvent } from 'react'
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
    const [addedTimestamp, setAddedTimestamp] = useState<ITimestamp[]>([])
    const [startTimestamp, setStartTimestamp] = useState<string[]>([...customTimestamp])
    const [endTimestamp, setEndTimestamp] = useState<string[]>([...customTimestamp])

    const getTimestamps = () => {
        return (
            addedTimestamp?.map((time, index) => {
                const { startTime, endTime } = time || {}
                return time && <div key={`${index}-${name}`}>
                    <span>{startTime}</span> - <span>{endTime}</span> 
                    <span onClick={() => deleteTimeSlot(index)}>Delete</span>
                </div>
            })
        )
    }

    const deleteTimeSlot = (index: number) => {
        const endTimeIndex = addedTimestamp[index].endTimeIndex

        //restore delete timestamps
        for(let i=index; i< endTimeIndex; i++) {
            startTimestamp[i] = convertIntegerToTime(i)
        }

        for(let i=0; i< endTimestamp.length; i++) {
            endTimestamp[i] = convertIntegerToTime(i)
        }
        setStartTimestamp([...startTimestamp])
        setEndTimestamp([...endTimestamp])

        //delete element from timestamp
        addedTimestamp.splice(index, 1)
        setAddedTimestamp([...addedTimestamp])
    }

    const addTime = () => {

        const startTimeIn24Format = convertTimeIn24Format(startTime)
        const endTimeIn24Format = convertTimeIn24Format(endTime)

        const startTimeIndex = parseInt(startTimeIn24Format)
        const endTimeIndex = parseInt(endTimeIn24Format)

        //remove start timestamps which has been allocated
        if(startTimeIndex > endTimeIndex) {
            for (let i = 0; i < endTimeIndex; i++)
                startTimestamp[i] = ''

            for (let i = startTimeIndex; i < startTimestamp.length; i++)
                startTimestamp[i] = ''

            setStartTimestamp([...startTimestamp])
        } else {
            for (let i = startTimeIndex; i < endTimeIndex; i++)
                startTimestamp[i] = ''

            setStartTimestamp([...startTimestamp])
        }
        //restore endTimestamp array
        for(let i=0; i<endTimestamp.length; i++)
            endTimestamp[i] = convertIntegerToTime(i)

        addedTimestamp[startTimeIndex] = {startTime, endTime, endTimeIndex}
    }

    const setStartTimeAndDropdownValues = (startTime: string) => {
        setStartTime(startTime)
        //restore endTimestamp array
        for(let i=0; i<endTimestamp.length; i++)
            endTimestamp[i] = convertIntegerToTime(i)

        const startTimeIn24Format = convertTimeIn24Format(startTime)
        const startTimeIndex = parseInt(startTimeIn24Format)

        if(addedTimestamp.length >= 1) {
            for (let time of addedTimestamp) {
                if (time) {
                    const {startTime, endTime} = time
                    const startTimeOfTimestampIn24Format = convertTimeIn24Format(startTime)
                    const endTimeOfTimestampIn24Format = convertTimeIn24Format(endTime)

                    const startTimeIndexOfTimestamp = parseInt(startTimeOfTimestampIn24Format)
                    const endTimeIndexOfTimestamp = parseInt(endTimeOfTimestampIn24Format)

                    if (startTimeIndex < startTimeIndexOfTimestamp) {
                        for (let i = 0; i < endTimestamp.length; i++) {
                            if (i > startTimeIndex && i <= startTimeIndexOfTimestamp)
                                continue
                            else
                                endTimestamp[i] = ''
                        }
                        setEndTimestamp([...endTimestamp])
                    } else if (startTimeIndex >= endTimeIndexOfTimestamp) {
                        for (let i = (startTimeIndexOfTimestamp + 1); i <= startTimeIndex; i++)
                            endTimestamp[i] = ''

                        setEndTimestamp([...endTimestamp])
                    }
                }
            }
        }
    }

    const convertTimeIn24Format = (time: string) => moment(time, 'hh:mm A').format('HH:mm')

    const convertIntegerToTime = (integer: number) => moment(integer.toString(), 'hh A').format('LT')

    return (
        <div className="card-container">
            <div className="card">
               <div>{name}</div>
               <div>
                    Start Time
                    <select onChange={(e:ChangeEvent<HTMLSelectElement>) => setStartTimeAndDropdownValues(e.target.value)}>
                        <option value={''}>select start time</option>
                        {
                            startTimestamp?.map((timestamp:string) => {
                                return timestamp && <option key={`${name}-${timestamp}`} value={timestamp}>{timestamp}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    End Time
                    <select onChange={(e:ChangeEvent<HTMLSelectElement>) => setEndTime(e.target.value)}>
                        <option value={''}>select end time</option>
                        {
                            endTimestamp.map((timestamp:string) => {
                                return timestamp && <option key={`${name}-${timestamp}`} value={timestamp}>{timestamp}</option>
                            })
                        }
                    </select>
                </div>
                <button onClick={addTime}>Add Time</button>
                { addedTimestamp && getTimestamps() }
            </div>
        </div>
    )
}
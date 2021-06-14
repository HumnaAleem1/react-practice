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
        const endTimeIndex = timestamp[index].endTimestampIndex

        for(let i=index; i< endTimeIndex; i++) {
            startTimestamp[i] = moment(i.toString(), 'hh A').format('LT')
        }
        for(let i=0; i< endTimestamp.length; i++) {
            endTimestamp[i] = moment(i.toString(), 'hh A').format('LT')
        }

        setStartTimestamp([...startTimestamp])
        setEndTimestamp([...endTimestamp])
        timestamp.splice(index, 1)
        setTimestamp([...timestamp])
    }

    const addTime = () => {
        const [sTime, startTimeIndex] = startTime.split('-')
        const [eTime, endTimeIndex] = endTime.split('-')

        const sTime24Format = convertTimeFormat(sTime)
        const eTime24Format = convertTimeFormat(eTime)

        //remove start timestamps which has been allocate
        for (let i = parseInt(sTime24Format); i < parseInt(eTime24Format); i++) {
            startTimestamp[i] = ''
            setStartTimestamp([...startTimestamp])
        }
        for(let i=0; i<endTimestamp.length; i++) {
            endTimestamp[i] = moment(i.toString(), 'hh A').format('LT')
        }
        timestamp[parseInt(startTimeIndex)] = {startTime: sTime, endTime: eTime, endTimestampIndex: parseInt(endTimeIndex)}
    }

    const setStartTimeAndDropdownValues = (value: string) => {
        const [sTime] = value.split('-')
        setStartTime(value)

        const startTimeIn24Format = convertTimeFormat(sTime)
        const startTimeIn24FormatNumber = parseInt(startTimeIn24Format)

        if(timestamp.length < 1) {
            for (let i = 0; i < startTimeIn24FormatNumber; i++) {
                endTimestamp[i] = ''
                setEndTimestamp([...endTimestamp])
            }
        } else {
            for (let time of timestamp) {
                const {startTime, endTime} = time || {}
                const startTime24Format = convertTimeFormat(startTime)
                const endTime24Format = convertTimeFormat(endTime)
                if(time) {
                    if(startTimeIn24FormatNumber < parseInt(startTime24Format)) {
                        for (let i = 0; i < endTimestamp.length; i++) {
                            if(i > startTimeIn24FormatNumber && i <= parseInt(startTime24Format)) {
                                continue
                            } else {
                                endTimestamp[i] = ''
                                setEndTimestamp([...endTimestamp])
                            }
                        }
                    } else if(startTimeIn24FormatNumber >= parseInt(endTime24Format)) {
                        for (let i = parseInt(startTime24Format); i <= startTimeIn24FormatNumber; i++) {
                            endTimestamp[i] = ''
                            setEndTimestamp([...endTimestamp])
                        }
                    }
                }
            }
        }
    }

    const convertTimeFormat = (time: string) => moment(time, 'hh:mm A').format('HH:mm')

    return (
        <div className="card-container">
            <div className="card">
               <div>{name}</div>
               <div>
                    Start Time
                    <select onChange={(e:ChangeEvent<HTMLSelectElement>) => setStartTimeAndDropdownValues(e.target.value)}>
                        <option value={''}>select start time</option>
                        {
                            startTimestamp?.map((timestamp:string, index:number) => {
                                return timestamp && <option key={`${name}-${timestamp}`} value={`${timestamp}-${index}`}>{timestamp}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    End Time
                    <select onChange={(e:ChangeEvent<HTMLSelectElement>) => setEndTime(e.target.value)}>
                        <option value={''}>select end time</option>
                        {
                            endTimestamp.map((timestamp:string, index:number) => {
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
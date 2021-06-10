export interface ICheckbox {
    label: string
    checked: boolean
}

export interface ITimestamp {
    startTime: string
    endTime: string
}

export interface ICustomTimestamp {
    [time: string]: ICustomTime
}

interface ICustomTime {
    time: string
    meridiem: 'AM' | 'PM'
}
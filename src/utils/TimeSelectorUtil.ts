export const timeTo12HrFormat = (time: string) => { 
    const time_array = time.split(":")
    let meridiem = 'AM'

    if (parseInt(time_array[0]) >= 12) {
        meridiem = 'PM'
    }

    if (parseInt(time_array[0]) > 12) {
        time_array[0] = (parseInt(time_array[0]) - 12).toString()
    }

    return time_array[0] + ':' + time_array[1] + ' ' + meridiem
}
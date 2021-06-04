import axios, { AxiosResponse } from 'axios'

export const get = async(apiUrl: string): Promise<AxiosResponse> => {
    try {
        return axios.get(apiUrl)
    } catch (error) {
        throw(error)
    }
}
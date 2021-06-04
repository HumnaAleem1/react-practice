import axios, { AxiosResponse } from 'axios'

export const get = async(apiUrl: string): Promise<AxiosResponse | void> => {
    try {
        return axios.get(apiUrl)
    } catch (error) {
        console.error(error);
    }
}
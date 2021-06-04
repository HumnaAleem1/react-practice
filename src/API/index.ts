import axios, { AxiosResponse } from 'axios'

const get = (apiUrl: string) => {
    return axios.get<AxiosResponse>(apiUrl)
    .then((response: AxiosResponse) => response.data)
    .catch(error => console.error(error))
}

export default { get }
import axios, { AxiosResponse } from 'axios'

const get = (apiUrl: string) => {
  return axios.get(apiUrl)
    .then((response: AxiosResponse) => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}

export default { get }
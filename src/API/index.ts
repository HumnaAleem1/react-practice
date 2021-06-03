import axios, { AxiosResponse } from 'axios'

const get = async(apiUrl: string) => {
  try {
    return axios.get<AxiosResponse>(apiUrl)
    .then((response) => response.data)
  } catch (error) {
    console.error(error);
  }
}

export default { get }
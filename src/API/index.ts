import axios from 'axios'

const get = (apiUrl: string) => {
  return axios.get(apiUrl)
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
    })
}

export default { get }
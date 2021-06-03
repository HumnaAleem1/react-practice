import axios from 'axios'

const get = (apiUrl: string) => {
  return axios.get(apiUrl)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
}

export default { get };
import axios from 'axios'

const get = async(apiUrl: string) => {
  try {
    return await axios.get(apiUrl)
  } catch (error) {
    console.error(error);
  }
}

export default { get }
import axios from 'axios'

const API_URL = 'https://swapi.dev/api/'

class DataService {
  getPeople(): Promise<any> {
    return axios.get(`${API_URL}people`)
  }
}

export default new DataService()

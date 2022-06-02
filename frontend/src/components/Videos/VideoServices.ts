import axios from 'axios'
import { Video } from './Videos'

const API = 'http://localhost:4000'

export const getVideos = async () => {
   // return await axios.get('http://localhost:4000/videos') 
   return await axios.get(`${API}/videos`)
   // tipado <Video[]> - para decir que devuelve un array de videos 
}

export const createVideos = async (video: Video) => {
   return await axios.post(`${API}/videos`, video)
}
 import axios from "axios"
 
const BASE_URI ='https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      
      maxResults: '50',
     
    },
    headers: {
      'X-RapidAPI-Key': '486197635emsh65d92c643f4c7c0p152a85jsna33724277b9f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const ApiService = {
    async fetching(url) {
        const  response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}





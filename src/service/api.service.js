 import axios from "axios";
 
const BASE_URI ='https://youtube-v31.p.rapidapi.com';

const options = {
    params:
     { //part: 'snippet', 
      // videoId: 'M7FIvfx5J10',
       maxResults:'50',
    },

     headers: {
    'X-RapidAPI-Key': process.env.REACT_API_PUBLIC_KEY,
    'X-RapidAPI-Host': BASE_URI
    
        }
    
}

export const ApiService = {
    async fetching() {
        const  response = await axios.get(`${BASE_URI}`)
    }
}





import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e4e2a61fbemsh4a23124f051453ap1008edjsn26a38e68026b'
         }
    });
    return data;
}
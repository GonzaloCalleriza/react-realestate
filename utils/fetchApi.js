import axios from 'axios';

export const baseUrl = 'http://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': RAPIDADPI_KEY
        }
    });

    return data;
}
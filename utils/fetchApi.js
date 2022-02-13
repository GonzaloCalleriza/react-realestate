import axios from 'axios';

export const baseUrl = 'http://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '3f6117bf09msh4529c3752473dbcp17bd4djsn15846de487b9'
        }
    });

    return data;
}
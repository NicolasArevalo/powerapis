import axios from 'axios'

const BASE_URL = 'https://valorant-api.com/v1'
const weapons_URL = `${BASE_URL}/weapons`

export const getWeapons = async () =>{

    let data
    const options = {
        method: 'GET',
        url: `${weapons_URL}`,
    }

    try {
        const response = await axios.request(options)
        if (response.status == 200) {
            data = response.data
        } else {
            console.log('Estado diferente a 200 bro wtf ')
        }
    } catch (e) {
        console.log('No se cudo bro ',e)
    }

    return data
}
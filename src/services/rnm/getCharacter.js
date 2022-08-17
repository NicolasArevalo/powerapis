import axios from 'axios'

const BASE_URL = ' https://rickandmortyapi.com/api'
const characters_URL = `${BASE_URL}/character`

export const getCharacter = async () =>{

    let data
    const options = {
        method: 'GET',
        url: `${characters_URL}`,
    }

    try {
        const response = await axios.request(options)
        if (response.data) {
            data = response.data.results
        } else {
            console.log('mano no sé qué pdo, no hay data ')
        }
    } catch (e) {
        console.log('el error ',e)
    }

    return data
}

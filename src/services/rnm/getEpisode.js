import axios from 'axios'

const BASE_URL = 'https://rickandmortyapi.com/api'

const episodes_URL = `${BASE_URL}/episode`

export const getEpisode = async (next='') =>{

    let data
    const options = {
        method: 'GET',
        url: next || `${episodes_URL}`,
    }

    try {
        const response = await axios.request(options)
        if (response.data) {
            data = {
                data:response.data.results,
                total: response.data.info.count,
                next: response.data.info.next
            }
            console.log(response.data)
        } else {
            console.log('mano no sé qué pdo, no hay data ')
        }
    } catch (e) {
        console.log('el error ',e)
    }

    return data
}
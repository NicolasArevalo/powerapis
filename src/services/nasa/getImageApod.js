import axios from 'axios'

const API_KEY = 'swnFVtZdKa2qDNWHg5bjbdEUKjCNl7Hu1aYAwNaU'

export const getImageApod = async () => {

    let data 

    const options = {
        method: 'GET',
        url: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
    };


    try {
        const response = await axios.request(options)

        if (response.status == 200) {
            data = response.data
        } else {
            console.log('mano no sé qué pdo, dice que success false ')
        }
    } catch (e) {
        console.log('el error ',e)
    }

    return data
}
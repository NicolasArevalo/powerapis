export const getCharactersByQuery = async (query) => {

    let data
    console.log('entra aquí')
    try {
        console.log('entra al try')
        const resRaw = await
            fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=effedaee93969b17d8c39e1b05d4ec03&hash=bd85ade5f09b9031834b8fcedcd9af07&nameStartsWith=${query}`)
        const res = await resRaw.json()
        console.log('trajo ya la info : '+res)
        if (res.code == 200) {
            data = res
            console.log('sí entra aquí positivo')
        } else {
            console.log('mano no sé qué pdo, dice que success false ')
            console.log(res)
        }

    } catch (e) {
        console.log('el error ', e)
    }

    console.log({ query, data })

    return data
}


export const getCharacters = async () => {

    let data

    try {
        const resRaw = await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=effedaee93969b17d8c39e1b05d4ec03&hash=bd85ade5f09b9031834b8fcedcd9af07')
        const res = await resRaw.json()

        if (res.code == 200) {
            data = res
        } else {
            console.log('mano no sé qué pdo, dice que success false ')
        }
    } catch (e) {
        console.log('el error ', e)
    }

    return data
}
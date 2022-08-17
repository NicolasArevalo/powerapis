import { useState } from 'react';
import axios from 'axios'

const getUserId = async (username) => {

    let data = {}

    const options = {
        method: 'GET',
        url: `https://instagram188.p.rapidapi.com/userinfo/${username}`,
        headers: {
            'X-RapidAPI-Key': 'f2ee01baf3msh36f73033c09448ap166af9jsn722a16f58aba',
            'X-RapidAPI-Host': 'instagram188.p.rapidapi.com'
        }
    };


    try {
        const response = await axios.request(options)

        if (response.status == 200) {
            data = response.data.data
        } else {
            console.log('mano no sé qué pdo, dice que success false ')
        }
    } catch (e) {
        console.log('el error ',e)
    }

    return data
}

const getUserPosts = async id => {

    let data = {}
    const cuantosPosts = 10

    const options = {
        method: 'GET',
        url: `https://instagram188.p.rapidapi.com/userpost/${id}/${cuantosPosts}/%7Bend_cursor%7D`,
        headers: {
            'X-RapidAPI-Key': 'f2ee01baf3msh36f73033c09448ap166af9jsn722a16f58aba',
            'X-RapidAPI-Host': 'instagram188.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options)

        if (response.status == 200) {
            data = response.data.data.edges
        } else {
            console.log('mano no sé qué pdo, dice que success false2 ')
        }
    } catch (e) {
        console.log(e)
    }

    return data
}

export const getUser = async username => {

    const { id, edge_followed_by } = await getUserId(username)
    const followers = edge_followed_by.count

    const posts = await getUserPosts(id)

    return {

        id,
        followers,
        posts,

    }
}

import { useEffect, useState } from 'react';
import { getCharacters } from '../../services/valorant/';

export const useCharacters = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo () {
            setState( { 
                data: await getCharacters(), 
                loading: false
            })
        }
        
        traerInfo()
        
    }, []) 


    return state
}
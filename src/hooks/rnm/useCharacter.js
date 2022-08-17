import { useEffect, useState } from 'react';
import { getCharacter } from '../../services/rnm/';

export const useCharacter = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo () {
            setState( { 
                data: await getCharacter(), 
                loading: false
            })
        }
        
        traerInfo()
        
    }, []) 


    return state
}
import { useEffect, useState } from 'react';
import { getCharactersByQuery } from '../../services/marvel/getCharacters';

export const useSearchCharacter = ( query ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo () {
            setState( { 
                data: await getCharactersByQuery(query), 
                loading: false
            })
            
        }

        traerInfo()
        
    }, []) 

    console.log({ query, state })

    return state
}
import { useEffect, useState } from 'react';
import { getEpisode } from '../../services/rnm/';

export const useEpisode = (next= '') => {

    const [state, setState] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo () {
            setState( { 
                data: await getEpisode(next), 
                loading: false
            })
        }
        
        traerInfo()
        
    }, []) 


    return state
}
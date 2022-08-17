import { useEffect, useState } from 'react';
import { getEpisode } from '../../services/rnm/';

export const useEpisode = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo () {
            setState( { 
                data: await getEpisode(), 
                loading: false
            })
        }
        
        traerInfo()
        
    }, []) 


    return state
}
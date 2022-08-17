import { useEffect, useState } from 'react';
import { getLocation } from '../../services/rnm/';

export const useLocation = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo () {
            setState( { 
                data: await getLocation(), 
                loading: false
            })
        }
        
        traerInfo()
        
    }, []) 


    return state
}
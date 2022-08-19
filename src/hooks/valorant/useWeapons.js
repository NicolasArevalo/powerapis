import { useEffect, useState } from 'react';
import { getWeapons } from '../../services/valorant';

export const useWeapons = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo () {
            setState( { 
                data: await getWeapons(), 
                loading: false
            })
        }
        
        traerInfo()
        
    }, []) 


    return state
}
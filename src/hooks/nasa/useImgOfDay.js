import { useEffect, useState } from 'react';
import { getImageApod } from '../../services/nasa/getImageApod';

export const useImgOfDay = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo () {
            setState( { 
                data: await getImageApod(), 
                loading: false
            })
            
        }
        
        traerInfo()
        
    }, []) 


    return state
}
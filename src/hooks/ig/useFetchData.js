import { useEffect, useState } from 'react';
import { getUser } from '../../services/ig/getUser';

export const useFetchData = ( username ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        async function traerInfo (username){
            setState( await getUser( username ))
        }
        traerInfo(username)
        
    }, [username]) 


    return state
}
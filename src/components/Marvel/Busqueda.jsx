import { useSearchCharacter } from '../../hooks/marvel/useSearchCharacter'
import Card from './Card'

const Busqueda = ({ query = '' }) => {

    const { data, loading } = useSearchCharacter( query )
    return (
        <div className='card-wrapper'>

            { data ? 
                data?.data?.results.map( el => (<Card key={el.id} name={el.name} thumbnail={el.thumbnail} id={el.id} />) )
                : null 
            }
             <hr />
        </div>
    )
}

export default Busqueda
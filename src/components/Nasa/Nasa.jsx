import { useImgOfDay } from '../../hooks/nasa/useImgOfDay'
import './Nasa.scss'

import Loading from '../Loading/Loading'
import Card from './Card'


const Nasa = () => {

  const { data, loading } = useImgOfDay()

  const { copyright, date, explanation, title, url } = data

  return (
    <main className='nasa'>
      {loading && <Loading />}

      <h1 className='nasa-titulo'>Imagen del día</h1>
      <div className="nasa-card-wrapper">
        <Card
          copyright={copyright}
          date={date}
          explanation={explanation}
          title={title}
          url={url} />
      </div>

    </main>
  )
}

export default Nasa
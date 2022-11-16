import { useEffect } from 'react'

import { useEpisode } from '../../../hooks/rnm'
import MiniLoading from '../../Loading/MiniLoading'

const Episodes = () => {

	const { data: dataEpisode, loading: loadingEpisode } = useEpisode()
	useEffect(() => {

	}, [])
	
	const handleNext = () =>{

	}

	return (
		<>
			{loadingEpisode && <MiniLoading />}
			<main className='cards-episodes'>
				{dataEpisode.data.map(el => (
					<div className='card' key={el.id}>
						<h2 className=''>{el.name}</h2>
						<h4 className=''>{el.air_date}</h4>
						<div className='badgeWrapper nes-badge is-icon'>
							<span className='is-primary'>{el.episode}</span>
						</div>
					</div>
				))}
			</main>
			<p>Total episodes: {dataEpisode.total}</p>
			<button onClick={handleNext}>{'>'}</button>
		</>
	)
}

export default Episodes

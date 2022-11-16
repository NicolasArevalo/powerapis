import React from 'react'

import { useLocation } from '../../../hooks/rnm'
import MiniLoading from '../../Loading/MiniLoading'

const Locations = () => {
	const { data: dataLocation, loading: loadingLocation } = useLocation()
	return (
		<>
			{loadingLocation && <MiniLoading />}
			<div id='card' className='cards-episodes'>
				{dataLocation.map(el => (
					<div className='card' key={el.id}>
						<h2 className=''>{el.name}</h2>
						<h4 className=''>{el.type}</h4>
						<span className=''>{el.dimension}</span>
					</div>
				))}
			</div>
		</>
	)
}

export default Locations

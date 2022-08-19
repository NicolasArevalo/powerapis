import React from 'react'
import { useWeapons } from '../../../hooks/valorant'

const Weapons = () => {
    const { data, loading } = useWeapons()
    const { data: weapons } = data

    return (
        <>
            {loading && <h1>Cargando calvo calviche</h1>}
            <div className='flex gap-3 flex-wrap m-auto w-full justify-center max-w-3xl'>
                {weapons ? weapons.map( weapon => (
                    <div className="bg-gray-200 max-w-xs py-2 px-4" key={weapon.uuid}>
                        <img src={weapon.displayIcon} alt={weapon.displayName} className='max-w-[100px] object-cover' />
                        <h2 className='font-extrabold text-4xl'>{weapon.displayName}</h2>
                        <p>{weapon.shopData?.categoryText}</p>
                        <p>$ { !weapon.shopData?.cost ? '0' : weapon.shopData?.cost}</p>
                    </div>
                )) : <h1> No hay nada pa mostrar bro</h1>}
            </div>
        </>

    )
}

export default Weapons
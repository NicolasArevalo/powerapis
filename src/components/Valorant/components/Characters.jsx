import React from 'react'
import { useCharacters } from '../../../hooks/valorant'

const Characters = () => {
    const { data, loading } = useCharacters()
    const { data: agents } = data
    console.log(agents)
    return (
        <>
            {loading && <h1>Cargando calvo calviche</h1>}
            <div className='flex gap-3 flex-wrap m-auto w-full justify-center'>
                {agents ? agents.map(agent => (
                    <div className="bg-gray-200 max-w-xs py-2 px-4" key={agent.uuid}>
                        <img src={agent.displayIcon} alt={agent.displayName} className='max-w-[100px] rounded-full border border-gray-800' />
                        <h2 className='font-extrabold text-4xl'>{agent.displayName}</h2>
                        <p>{agent.description}</p>
                        <h2>Habilidades:</h2>
                        <ul className='flex flex-wrap text-sm gap-4 justify-center bg-gray-500 p-4 m-2 rounded-sm '>
                            {agent.abilities.map(ability => (
                                <li key={ability.slot} className='flex flex-col justify-center items-center'>
                                    <img src={ability.displayIcon} alt="" className='max-w-[40px]' />
                                    <h3 className='font-bold break-all text-gray-100'>{ability.displayIcon ? ability.displayName : null}</h3>
                                    {/* <p>{ability.description}</p> */}
                                </li>))}
                        </ul>
                    </div>
                )) : <h1> No hay nada pa mostrar bro</h1>}
            </div>
        </>

    )
}

export default Characters
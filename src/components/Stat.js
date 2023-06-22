import React from 'react'
import stats_bg from '../images/stats_bg.png'

const Stat = ({ title, value }) => {
    return (
        <div className='h-fit relative w-full px-4 sm:px-0'>
            <p className='m-auto w-fit text-light relative top-2 text-sm'>{title}</p>

            <div className='relative w-full py-[10px] flex justify-center font-Orbitron'>
                <p className='mx-auto mt-1'>{value}</p>
                <img src={stats_bg} className='absolute h-full w-full top-0' alt="" />
            </div>
        </div>
    )
}

export default Stat
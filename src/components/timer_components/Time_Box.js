import React from 'react'

const Time_Box = ({ digit }) => {
    return (
        <div className='bg-[#FFFFFF20] sm:w-10 sm:h-10 h-8 w-8 flex justify-center items-center font-Orbitron text-2xl border border-[#FFFFFF20]'>
            {digit}
        </div>
    )
}

export default Time_Box
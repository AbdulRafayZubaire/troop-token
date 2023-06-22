import React from 'react'

const Box = ({deposit, setDeposit, btn, placeholder, title}) => {
    return (
        <div className=' flex flex-col gap-2'>

            <p className=' font-Raleway flex justify-between items-center text-sm'>
                <p>{title}: </p>
                <p>(0 max)</p>
            </p>

            {/* input box */}
            <div className='flex font-Orbitron'>
                <input type="text" className='basis-[75%] w-full py-3 border border-[#FFFFFF20] font-Orbitron text-sm px-3 bg-[#FFFFFF20] outline-none' value={deposit} onChange={(e)=> setDeposit(e.target.value)} placeholder={placeholder}/>
                <button className={`${btn=="Submit"? "bg-[#FFFFFF50]":"bg-yellow"}  w-full basis-[25%] text-sm`}>
                    {btn}
                </button>
            </div>
        </div>
    )
}

export default Box
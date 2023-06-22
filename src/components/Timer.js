import React, { useState } from 'react'
import card from '../images/card_bg_yellow.png'
import Progress from './timer_components/Progress'
import DigitalTimer from './DigitalTimer'
import btn_yellow from '../images/btn_yellow.png'
import btn_white from '../images/btn_white.png'
import Box from './timer_components/Box'

const Timer = ({ deposit_view }) => {

    // useState
    const [deposit, setDeposit] = useState(0)
    // address usesate
    const [address, setAddress] = useState("");


    return (
        <div className={`${deposit_view ? "block" : "hidden"} sm:block w-full h-fit relative p-5 mx-4 sm:mx-0 sm:mb-0 mb-2`}>
            <img src={card} className='absolute h-full w-full top-0 left-0' alt="" />

            <div className='flex flex-col gap-4 relative'>

                <Progress value={10}/>
                <DigitalTimer />

                {/* dropdown */}
                <div className=' flex gap-2 font-Orbitron'>
                    <select name="number" id="" className=' bg-transparent cursor-pointer w-[120px]'>
                        <option value="0x7c8d1c186506...sda21">AutoClaim</option>
                    </select>
                </div>

                <Box deposit={deposit} setDeposit={setDeposit} btn={"DEPOSIT"} title={"Deposit"} />

                {/* Buttons */}
                <div className='flex flex-col gap-3'>
                    <button className='w-full py-4 relative'>
                        <p className='z-10 relative text-white font-Orbitron'>CLAIM</p>
                        <img className='absolute h-full w-full top-0' src={btn_yellow} alt="btn-yellow" />
                    </button>

                    <button className='w-full py-4 relative'>
                        <p className='z-10 relative text-white font-Orbitron'>COMPOUND</p>
                        <img className='absolute h-full w-full top-0' src={btn_white} alt="btn-yellow" />
                    </button>
                </div>

                <Box deposit={address} setDeposit={setAddress} placeholder={"New Address"} btn={"Submit"} title={"Change Referral"} />
            </div>
        </div>
    )
}

export default Timer
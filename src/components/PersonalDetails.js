import React, { useEffect, useRef, useState } from 'react'
import card from '../images/card_bg_yellow.png'
import DataEntity from './DataEntity'

const PersonalDetails = ({ stats_view }) => {

    // usestate for auto claim anf auto compound
    const [autoclaim, setAutoclaim] = useState(true);
    const [autocompound, setAutocompound] = useState(false);

    return (
        <div className={`${!stats_view ? "hidden" : "block"} w-full h-fit relative p-5 sm:block mx-4 sm:mx-0 sm:mb-0 mb-2`}>
            <img src={card} className='absolute h-full w-full top-0 left-0' alt="" />

            <div className='font-Orbitron flex flex-col gap-5 relative w-full'>

                {/* drop down head*/}
                <div className=' font-Orbitron flex justify-between'>
                    {/* key */}
                    <p className='h5'>Personal Details</p>

                    {/* dropdown */}
                    <select name="gun" id="" className=' bg-transparent'>
                        <option className=' text-black' value="$TROOP">$TROOP</option>
                        <option className=' text-black' value="gun">Gun</option>
                        <option className=' text-black' value="armour">Armour</option>
                    </select>
                </div>

                {/* Toggles */}
                <div className=' font-Orbitron flex justify-between relative'>
                    {/* key */}
                    <p className='h5'>Autoclaim</p>

                    <label class="relative flex items-center cursor-pointer mt-auto">
                        <input type="checkbox" onChange={() => setAutoclaim(!autoclaim)} value={autoclaim} class="sr-only peer" />
                        <div className={`w-11 h-6 ${autoclaim ? 'bg-[#3C6856]' : 'bg-grey'} peer-focus:outline-none rounded-full ${autoclaim ? 'after:translate-x-full' : ''} peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:rounded-full after:h-5 after:top-[2px] after:left-[2px] after:w-5 after:transition-all dark:border-gray-600`}></div>
                    </label>

                </div>
                <div className=' font-Orbitron flex justify-between relative'>
                    {/* key */}
                    <p className='h5'>Autocompound</p>

                    <label class="relative flex items-center cursor-pointer mt-auto">
                        <input type="checkbox" onChange={() => setAutocompound(!autocompound)} value={autocompound} class="sr-only peer" />
                        <div className={`w-11 h-6 ${autocompound ? 'bg-[#3C6856]' : 'bg-grey'} peer-focus:outline-none rounded-full ${autocompound ? 'after:translate-x-full' : ''} peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:rounded-full after:h-5 after:top-[2px] after:left-[2px] after:w-5 after:transition-all dark:border-gray-600`}></div>
                    </label>

                </div>

                {/* Data */}
                <div className='flex flex-col gap-5 mt-2'>
                    <DataEntity title={"Available"} value={"10,000 $TROOP"} />
                    <DataEntity title={"Deposits"} value={"200,000 $TROOP"} />
                    <DataEntity title={"Claimed"} value={"80,000 $TROOP"} />
                    <DataEntity title={"Max Pauout"} value={"20,000 $TROOP"} />
                    <DataEntity title={"Current Referral Percentage"} value={"%13,00"} />
                    <DataEntity title={"Current Daily Payback Percentage"} value={"%13,00"} />
                    <DataEntity title={"Referrals Rewards"} value={"0 $TROOP"} />
                    <DataEntity title={"Team"} value={"0"} />
                    <DataEntity title={"My Referral"} value={"0x7c8d1ci...4a4asdnasda87"} />
                    <DataEntity title={"Total Deposited"} value={"0 $TROOP"} />
                    <DataEntity title={"Total Users"} value={"0 $TROOP"} />
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
import React, { useEffect, useState } from 'react'
import Time_Box from './timer_components/Time_Box'
import i from '../images/i.svg'

var days, seconds, hours, minutes;
var today = new Date()
const targetTime = new Date().setDate(today.getDate() + 20);
// const targetTime = new Date().getTime() - 10 * 24 * 60 * 60 * 1000;

const DigitalTimer = () => {

    const [currentTime, setCurrentTime] = useState(new Date(new Date().setDate(today.getDate() + 30)));
    // const [currentTime, setCurrentTime] = useState(Date.now());

    const timeBetween = targetTime - currentTime;
    seconds = Math.floor((timeBetween / 1000) % 60);
    minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     console.log(seconds);
    //     console.log(minutes);
    // }, [timeBetween]);
    return (
        <div className=' flex flex-col gap-2'>

            <p className=' font-Raleway flex justify-between items-center text-sm'>
                <p>Next troop withdrawal: </p>
                <p className='group w-6 h-6 rounded-xl text-center pt-1 relative inline-block'><img src={i} alt="" />
                    <span className='hidden bg-yellow ml-8 text-[#3C6856] font-bold w-fit text-center rounded p-2 absolute group-hover:block'>description goes here </span>
                </p>
            </p>

            {/* timer here */}
            <div className='flex justify-between gap-2 flex-wrap'>

                {/* days */}
                <div className='flex flex-col gap-1 items-center'>

                    <div className='flex gap-1'>
                        <Time_Box digit={Math.floor(days / 10)} />
                        <Time_Box digit={Math.floor(days % 10)} />
                    </div>
                    <p className='text-sm text-[#FFFFFF80] font-Raleway'>Days</p>
                </div>

                {/* Hours */}
                <div className='flex flex-col gap-1 items-center'>

                    <div className='flex gap-1'>
                        <Time_Box digit={Math.floor(hours / 10)} />
                        <Time_Box digit={Math.floor(hours % 10)} />
                    </div>
                    <p className='text-sm text-[#FFFFFF80] font-Raleway'>Hours</p>
                </div>

                {/* Minutes */}
                <div className='flex flex-col gap-1 items-center'>

                    <div className='flex gap-1'>

                        <Time_Box digit={Math.floor(minutes / 10)} />
                        <Time_Box digit={Math.floor(minutes % 10)} />
                    </div>
                    <p className='text-sm text-[#FFFFFF80] font-Raleway'>Minutes</p>
                </div>

                {/* Seconds */}
                <div className='flex flex-col gap-1 items-center'>

                    <div className='flex gap-1'>
                        <Time_Box digit={Math.floor(seconds / 10)} />
                        <Time_Box digit={Math.floor(seconds % 10)} />
                    </div>
                    <p className='text-sm text-[#FFFFFF80] font-Raleway'>Seconds</p>
                </div>
            </div>
        </div>
    )
}

export default DigitalTimer
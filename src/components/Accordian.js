import React, { useEffect, useState } from 'react';
import btn from '../images/btn_yellow.png'
import card_md from '../images/card_bg_md.png'
import card_sm from '../images/card_bg_sm.png'
import plus from '../images/plus.svg'
import minus from '../images/minus.png'

const Accordion = ({ title, content, icon, price, toggleAccordion, isOpen }) => {

    useEffect(()=>{
        console.log(isOpen);
    })

    return (
        // <div id="accordian" className={`h-fit my-2 p-10 w-[450px] ${isOpen ? 'bg-md' : 'bg-sm'} bg-auto bg-no-repeat flex flex-col gap-5`}>

        <div id="accordian" className={`h-fit p-5 w-full min-w-[250px] flex flex-col gap-5 relative mb-4 sm:mb-0`}>
            <img className='absolute h-full w-full top-0 left-0 ' src={isOpen?card_md:card_sm} alt="" />
            <div className='flex justify-between relative z-10'>
                <div className='w-fit flex gap-2 items-center'>
                    <img src={icon} alt="" />
                    <span className='ml-2 font-Orbitron'>{title}</span>
                </div>
                <span  onClick={()=> toggleAccordion()} className='cursor-pointer my-auto'>{isOpen ? <img src={minus} className='p-2' alt="" /> : <img src={plus} className='p-2' alt="" /> }</span>
            </div>

            {
                isOpen && <div className='flex flex-col gap-5'>
                    <p className=' font-Raleway text-light text-sm'>{content}</p>
                    <p className=' font-Orbitron'>Price: <span className='text-yellow'>${price}</span></p>

                    {/* <button className='w-full h-14 bg-btn-yellow bg-cover bg-no-repeat'>Buy {title}</button> */}
                    <button className='w-full py-4 relative'>
                        <p className='z-10 relative text-white font-Orbitron'>Buy {title}</p>
                        <img className='absolute h-full w-full top-0' src={btn} alt="btn-yellow" />
                    </button>
                </div>
            }

        </div >
    );
};

export default Accordion;

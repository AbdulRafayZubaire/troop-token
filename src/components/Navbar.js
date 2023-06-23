import React, { useState } from 'react'
import logo from '../images/logo.svg'
// import cat_icon from '../images/cat.svg'
import btn_yellow_nav from '../images/btn_yellow_nav.svg'
import btn_white_nav from '../images/btn_white_nav.svg'
import bar from '../images/bar.svg'
import cross from '../images/cross.svg'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`p-2 flex sm:flex-row justify-between items-center flex-col px-4`}>
      <div className='brand sm:w-fit w-full flex justify-between items-center'>
        <img src={logo} className='sm:w-auto sm:min-w-10 w-10' alt="logo" />
        {
          isOpen ? (

            <img src={cross} alt="" className='' onClick={() => setIsOpen(!isOpen)} />
          ) :
            (
              <img src={bar} alt="" className='sm:hidden' onClick={() => setIsOpen(!isOpen)} />
            )
        }
      </div>


      <div id="right" className={`sm:flex sm:flex-row sm:w-fit gap-5 flex-col-reverse sm:bg-transparent w-full mt-4 sm:mt-0 ${isOpen ? 'flex' : 'hidden'}`}>

        {/* dropdown */}
        {/* <div className='flex gap-2 w-full'>
          <img src={cat_icon} alt="" />
          <select name="number" id="" className=' bg-transparent'>
            <option value="0x7c8d1c186506...sda21">0x7c8d1c186506...sda21</option>
          </select>
        </div> */}

        {/* buttons */}



        <div className='flex sm:w-[300px] w-full'>
          <button className='py-3 relative w-full h-full '>
            <p className='z-10 relative text-white font-Orbitron w-full'>Swap</p>
            <img className='absolute h-full w-full top-0 left-0 cover border-red' src={btn_yellow_nav} alt="btn-yellow" />
          </button>

          <button className='relative py-3 w-full h-full'>
            <p className='z-10 relative text-white font-Orbitron w-full'>Connect</p>
            <img className='absolute h-full w-full top-0' src={btn_white_nav} alt="btn-yellow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
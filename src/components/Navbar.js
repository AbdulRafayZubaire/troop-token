import React, { useState } from 'react'
import logo from '../images/logo.svg'
import cat_icon from '../images/cat.svg'
import btn_yellow from '../images/btn_yellow.png'
import btn_white from '../images/btn_white.png'
import bar from '../images/bar.svg'
import cross from '../images/cross.svg'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`p-2 flex sm:flex-row justify-between items-center flex-col  px-4`}>
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
        <div className='flex gap-2 w-full'>
          <img src={cat_icon} alt="" />
          <select name="number" id="" className=' bg-transparent'>
            <option value="0x7c8d1c186506...sda21">0x7c8d1c186506...sda21</option>
          </select>
        </div>

        {/* buttons */}
        <div className='flex gap-2'>
          <button className=' py-4 relative sm:w-[200px] w-full flex justify-center'>
            <p className='z-10 relative text-white font-Orbitron w-full'>Swap</p>
            <img className='absolute h-full w-full top-0' src={btn_yellow} alt="btn-yellow" />
          </button>

          <button className=' py-4 relative sm:w-[200px] w-full flex justify-center'>
            <p className='z-10 relative text-white font-Orbitron w-full'>AirDrop</p>
            <img className='absolute h-full w-full top-0' src={btn_white} alt="btn-yellow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
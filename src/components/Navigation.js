import React from 'react'
import deposit from '../images/deposit_icon.png'
import weapon from '../images/weapon_icon.png'
import stats from '../images/stats_icon.png'

const Navigation = ({ deposit_view, weapon_view, stats_view, setWeapon_view, setStats_view, setDeposit_view }) => {
  return (
    <div className='flex sm:hidden justify-around bg-black pt-3 mt-auto sticky bottom-0 w-full z-50 px-4'>
      <div className='flex flex-col justify-center items-center' onClick={() => {
        setDeposit_view(true)
        setStats_view(false)
        setWeapon_view(false)
      }}>
        <img src={deposit} className='w-6 h-6' alt="" />
        <p className={`text-sm ${!deposit_view ? "text-light" : "text-white"}`}>Deposit</p>
      </div>

      <div className='flex flex-col justify-center items-center' onClick={() => {
        setDeposit_view(false)
        setStats_view(false)
        setWeapon_view(true)
      }}>
        <img src={weapon} className='w-6 h-6' alt="" />
        <p className={`text-sm ${!weapon_view ? "text-light" : "text-white"}`}>Weapons</p>
      </div>

      <div className='flex flex-col justify-center items-center' onClick={() => {
        setDeposit_view(false)
        setStats_view(true)
        setWeapon_view(false)
      }}>
        <img src={stats} className='w-6 h-6' alt="" />
        <p className={`text-sm ${!stats_view ? "text-light" : "text-white"}`}>Stats</p>
      </div>

    </div>
  )
}

export default Navigation
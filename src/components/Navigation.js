import React from 'react'
import deposit_active from '../images/deposit_icon_active.svg'
import deposit from '../images/deposit_icon.svg'
import weapon_active from '../images/weapon_icon_active.svg'
import weapon from '../images/weapon_icon.svg'
import stats from '../images/stats_icon.svg'
import stats_active from '../images/stats_icon_active.svg'



const Navigation = ({ deposit_view, weapon_view, stats_view, setWeapon_view, setStats_view, setDeposit_view }) => {
  return (
    <div className='flex sm:hidden justify-around bg-black pt-3 mt-auto sticky bottom-0 w-full z-50 px-4 pb-2'>
      <div className='flex flex-col justify-center items-center' onClick={() => {
        setDeposit_view(true)
        setStats_view(false)
        setWeapon_view(false)
      }}>
        <img src={deposit_view ? deposit_active : deposit} className='w-6 h-6' alt="" />
        <p className={`text-sm ${!deposit_view ? "text-light" : "text-white"}`}>Deposit</p>
      </div>

      <div className='flex flex-col justify-center items-center' onClick={() => {
        setDeposit_view(false)
        setStats_view(false)
        setWeapon_view(true)
      }}>
        <img src={weapon_view?weapon_active:weapon} className='w-6 h-6' alt="" />
        <p className={`text-sm ${!weapon_view ? "text-light" : "text-white"}`}>Weapons</p>
      </div>

      <div className='flex flex-col justify-center items-center' onClick={() => {
        setDeposit_view(false)
        setStats_view(true)
        setWeapon_view(false)
      }}>
        <img src={stats_view? stats_active: stats} className='w-6 h-6' alt="" />
        <p className={`text-sm ${!stats_view ? "text-light" : "text-white"}`}>Stats</p>
      </div>

    </div>
  )
}

export default Navigation
import React, { useState } from 'react'
import Weapons from './components/Weapons'
import Timer from './components/Timer'
import Stats from './components/Stats'
import Navbar from './components/Navbar'
import PersonalDetails from './components/PersonalDetails'
import Navigation from './components/Navigation'

const MainScreen = () => {

    const [deposit_view, setDeposit_view] = useState(false);
    const [weapon_view, setWeapon_view] = useState(true);
    const [stats_view, setStats_view] = useState(false);

    return (

        <div className='sm:mb-0 mb-0 flex flex-col'>
            <Navbar />
            <Stats />

            <div className='flex gap-2 mt-5'>
                <Timer deposit_view={deposit_view}/>
                <Weapons weapon_view={weapon_view} />
                <PersonalDetails stats_view={stats_view}/>
            </div>

            <Navigation deposit_view={deposit_view} weapon_view={weapon_view} stats_view={stats_view} setDeposit_view={setDeposit_view} setStats_view={setStats_view} setWeapon_view={setWeapon_view}/>
        </div>
    )
}

export default MainScreen
import React from 'react'
import Stat from './Stat'

const Stats = () => {
    return (
        <div className='flex justify-between sm:gap-2 sm:flex-row flex-col'>
            <Stat title={"Troop price"} value={"$12.94"} />
            <Stat title={"Total rewards claimed"} value={"22,000,000 $TROOP"} />
            <Stat title={"Total users"} value={"11,129"} />
            <Stat title={"Total value stake"} value={"$100,000,000"} />
            <Stat title={"Total % of supply staked"} value={"%89,00"} />
        </div>
    )
}

export default Stats
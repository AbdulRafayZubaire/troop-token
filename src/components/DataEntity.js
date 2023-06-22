import React from 'react'

const DataEntity = ({title, value}) => {
  return (
    <div className='flex justify-between font-Raleway items-center'>
        <p className='text-light text-sm'>{title}:</p>
        <p className='text-md'>{value}</p>
    </div>
  )
}

export default DataEntity
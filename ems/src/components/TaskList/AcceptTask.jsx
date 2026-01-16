import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-red-400 rounded-xl '>

            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1c rounded'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2 '>{data.description}</p>
        <div className='flex justify-between mt-6'>
            <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
            <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
        </div>
        </div>
  )
}

export default AcceptTask
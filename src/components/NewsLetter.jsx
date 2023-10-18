import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex w-3/4 m-auto justify-evenly items-center p-4 bg-slate-200 rounded-lg'>
        <div className=''>
            <h1 className='text-xl font-bold mb-1'>Subscribe To Newsletter</h1>
            <p className='text-gray-400 mb-2'>Get free guide about smart watches daily. </p>
            <div className='bg-white p-2 rounded-md'>
                <input  className='' type='text' />
                <button className='bg-blue-500 text-white p-2 rounded-md'>Subscribe</button>
            </div>
        </div>
        <div>
         <Image src='/watch.png' height='162' width='162' />
        </div>
    </div>
  )
}

export default NewsLetter
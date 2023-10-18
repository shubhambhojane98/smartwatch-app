import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around p-2 bg-black'>
        <h1 className='text-white text-lg'>MyWatch</h1>
        <ul className='flex'>
            <li className=' text-white'>Home</li>
            <li className='pl-6 text-white'>Products</li>
            <li className='pl-6 text-white'>About</li>
            <li className='pl-6 text-white'>Contact</li>
        </ul>
        <ul className=' flex'>
            <li className='text-white'>Login</li>
            <li className='pl-4 text-white'>Cart</li>
        </ul>
    </div>
  )
}

export default Navbar
import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between h-12 bg-gray-400'>
        <div className='my-auto'>
            <h1 className='px-4'>LOGO</h1>
        </div>
        <nav className='my-auto'>
            <ul className='flex'>
                <li className='px-4'>Home</li>
                <li className='px-4'>Notes</li>
                <li className='px-4'>About</li>
            </ul>
        </nav>
        <div className='flex my-auto'>
            <h2 className='px-4'>login</h2>
            <h2 className='px-4'>Signup</h2>
        </div>
    </div>

  )
}
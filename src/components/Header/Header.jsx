import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className='flex justify-around text-center'>
        <NavLink
            to="/"
            className={({isActive}) => `py-2 px-4 w-[50%] duration-200 border-b ${isActive? "text-orange-700 font-semibold" : "text-gray-700"} border-gray-100 hover:bg-gray-50 hover:text-orange-700`}
        >
            Currency
        </NavLink>
        <NavLink
            to="/unit"
            className={({isActive}) => `py-2 px-4 w-[50%] duration-200 border-b ${isActive? "text-orange-700 font-semibold" : "text-gray-700"} border-gray-100 hover:bg-gray-50 hover:text-orange-700`}
        >
            Unit
        </NavLink>
    </nav>
  )
}

export default Header
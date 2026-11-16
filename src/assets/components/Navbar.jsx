import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200'>
      <div className='max-w-6xl mx-auto flex items-center justify-between py-3 px-4 md:px-7'>
        {/* Logo */}
        <NavLink to={'/'}>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm transition-transform duration-300 hover:rotate-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M16 10a4 4 0 0 1-8 0" />
                <path d="M3 6h18" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Shop<span className="text-indigo-600">Nest</span>
            </span>
          </div>
        </NavLink>

        {/* Links */}
        <div className='flex gap-6 md:gap-8'>
          <Menu to={'/'} title={'Home'} end />
          <Menu to={'/product'} title={'Products'} />
        </div>
      </div>
    </nav>
  )
}

const Menu = ({ to, title, end }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `relative py-1 text-sm md:text-base font-medium transition-colors duration-300
        after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 ${
          isActive
            ? 'text-indigo-600 after:w-full'
            : 'text-gray-600 hover:text-indigo-600 after:w-0 hover:after:w-full'
        }`
      }
    >
      {title}
    </NavLink>
  )
}

export default Navbar
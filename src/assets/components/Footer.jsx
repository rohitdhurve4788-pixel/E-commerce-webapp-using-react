import React from 'react'
import { Link } from 'react-router-dom'

const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='w-fit text-sm text-gray-400 transition-all duration-300 hover:text-white hover:translate-x-1'
    >
      {children}
    </Link>
  )
}

const Footer = () => {
  const socials = [
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Facebook', icon: '📘', href: '#' },
  ]

  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-6xl mx-auto px-4 md:px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-10'>
        {/* Brand */}
        <div className='col-span-2 flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-5 w-5'
              >
                <path d='M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' />
                <path d='M16 10a4 4 0 0 1-8 0' />
                <path d='M3 6h18' />
              </svg>
            </div>
            <span className='text-xl font-bold tracking-tight text-white'>
              Shop<span className='text-indigo-400'>Nest</span>
            </span>
          </div>

          <p className='text-sm text-gray-400 max-w-xs'>
            Fashion, jewellery and electronics at honest prices, delivered to your door.
          </p>

          <div className='flex gap-3'>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className='h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-1'
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className='flex flex-col gap-3'>
          <h3 className='text-white font-semibold mb-1'>Quick Links</h3>
          <FooterLink to='/'>Home</FooterLink>
          <FooterLink to='/product'>Products</FooterLink>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-3'>
          <h3 className='text-white font-semibold mb-1'>Contact</h3>
          <p className='text-sm text-gray-400'>📍 Maharashtra, India</p>
          <p className='text-sm text-gray-400'>✉️ support@shopnest.com</p>
          <p className='text-sm text-gray-400'>📞 +91 98765 43210</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-gray-800'>
        <div className='max-w-6xl mx-auto px-4 md:px-7 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500'>
          <p>© {new Date().getFullYear()} ShopNest. All rights reserved.</p>
          <p>Made with ❤️ using React & Tailwind</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import Link from 'next/link'
import Logo from './logo'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { navItemVariants } from '@/utils/framer'
import { useAppSelector } from '@/hooks/redux'
import { getCartQuantity } from '@/utils/cart'

export default function Navbar() {
  const { pathname } = useRouter()
  const cart = useAppSelector((state) => state.cart)
  const quantity = getCartQuantity(cart)

  return (
    <nav className='w-full p-4 bg-white border-b'>
      <div className='w-full max-w-7xl mx-auto justify-between flex items-center'>
        <Link
          href='/'
          id='left'
        >
          <Logo />
        </Link>
        <motion.ul
          initial='initial'
          animate='animate'
          variants={navItemVariants}
          className='flex gap-4'
        >
          <NavItem
            isSelected={pathname === '/'}
            href='/'
          >
            Shop
          </NavItem>
          <NavItem
            isSelected={pathname === '/cart'}
            href='/cart'
          >
            <svg
              width='26px'
              height='26px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g
                id='SVGRepo_bgCarrier'
                strokeWidth='0'
              ></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z'
                  stroke='#000000'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>{' '}
              </g>
            </svg>
            {!!cart.length && (
              <span className='absolute top-0.5 -right-3 flex items-center justify-center text-xs h-5 w-5 bg-emerald-400 p-0.5 rounded-full text-white ml-1'>
                {quantity}
              </span>
            )}
          </NavItem>
        </motion.ul>
      </div>
    </nav>
  )
}

type NavItemProps = {
  children: React.ReactNode
  href: string
  isSelected: boolean
}

function NavItem({ children, href, isSelected }: NavItemProps) {
  return (
    <li
      className={`relative p-2 rounded-t-xl transition-colors duration-500 ${
        isSelected ? 'bg-emerald-50' : ''
      }`}
    >
      <Link href={href}>{children}</Link>
      {isSelected && (
        <motion.span
          layoutId='nav-underline'
          className='w-full h-0.5 bg-slate-700 absolute top-full left-0'
        />
      )}
    </li>
  )
}

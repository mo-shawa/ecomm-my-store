import Link from 'next/link'
import Logo from '../logo'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { navItemVariants } from '@/utils/framer'
import { useAppSelector } from '@/hooks/redux'
import { getCartQuantity } from '@/utils/cart'
import NavItem from './nav-item'
import CartIcon from './cart-icon'

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
            <CartIcon quantity={quantity} />
          </NavItem>
        </motion.ul>
      </div>
    </nav>
  )
}

import Link from 'next/link'
import Logo from './logo'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { navItemVariants } from '@/utils/framer'

export default function Navbar() {
  const { pathname } = useRouter()

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
            Products
          </NavItem>
          <NavItem
            isSelected={pathname === '/cart'}
            href='/cart'
          >
            Cart
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

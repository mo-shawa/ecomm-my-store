import { motion } from 'framer-motion'
import Link from 'next/link'

type NavItemProps = {
  children: React.ReactNode
  href: string
  isSelected: boolean
}

export default function NavItem({ children, href, isSelected }: NavItemProps) {
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

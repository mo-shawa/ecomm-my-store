import { cartQuantityVariants } from '@/utils/framer'
import { AnimatePresence, motion } from 'framer-motion'
import useHasMounted from '@/hooks/useHasMounted'

type Props = {
  quantity: number
}

export default function CartIcon({ quantity }: Props) {
  const hasMounted = useHasMounted()

  return (
    <>
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
          <path
            d='M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z'
            stroke='#000000'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </g>
      </svg>
      <AnimatePresence>
        {hasMounted && !!quantity && (
          <motion.span
            variants={cartQuantityVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className='absolute top-0.5 -right-3 flex items-center justify-center text-xs h-5 w-5 bg-emerald-400 p-0.5 rounded-full text-white ml-1'
          >
            {quantity}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  )
}

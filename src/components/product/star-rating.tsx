import { ratingChildVariants } from '@/utils/framer'
import { motion } from 'framer-motion'

export default function StarRating({ selected }: { selected: Product }) {
  return (
    <motion.div
      variants={ratingChildVariants}
      className='flex gap-1'
    >
      {Array(Math.round(selected.rating.rate))
        .fill(null)
        .map((_, i) => (
          <svg
            key={i}
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-yellow-400'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 1l2.928 6.472L19.856 8.5l-5.36 5.216L15.928 19 10 15.472 4.072 19l1.432-5.284L.144 8.5l6.928-.028L10 1z'
              clipRule='evenodd'
            />
          </svg>
        ))}
    </motion.div>
  )
}

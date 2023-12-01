import { productContainerVariants } from '@/utils/framer'
import { motion } from 'framer-motion'
import ProductSkeleton from './product-skeleton'

export default function SkeletonList() {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      key='skeleton-container'
      variants={productContainerVariants}
      className='flex gap-6 mt-12 flex-wrap justify-center'
    >
      {Array(16)
        .fill(null)
        .map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
    </motion.div>
  )
}

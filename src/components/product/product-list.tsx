import { productContainerVariants } from '@/utils/framer'
import { motion } from 'framer-motion'
import Product from './product'
import ProductSkeleton from './product-skeleton'

type Props = {
  products: Product[]
}

export default function ProductList({ products }: Props) {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={productContainerVariants}
      className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 flex-wrap justify-center'
    >
      {products.map((product) => (
        <Product
          key={`preview-card-${product.id}`}
          product={product}
        />
      ))}
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <ProductSkeleton key={`skeleton-${i}`} />
        ))}
    </motion.div>
  )
}

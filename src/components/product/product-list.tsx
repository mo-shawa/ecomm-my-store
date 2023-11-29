import { productContainerVariants } from '@/utils/framer'
import { motion } from 'framer-motion'
import Product from './product'

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
      className='flex gap-6 mt-12 flex-wrap justify-center'
    >
      {products.map((product) => (
        <Product
          key={`preview-card-${product.id}`}
          product={product}
        />
      ))}
    </motion.div>
  )
}

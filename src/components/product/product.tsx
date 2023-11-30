import Image from 'next/image'
import { useAppDispatch } from '@/hooks/redux'
import { motion } from 'framer-motion'
import { ease, productCardVariants } from '@/utils/framer'
import AddToCartButton from './add-to-cart-button'
import { setSelectedProduct } from '@/store/selected-product-slice'

type Props = {
  product: Product
}

export default function Product({ product }: Props) {
  const dispatch = useAppDispatch()

  return (
    <motion.div
      onClick={() => dispatch(setSelectedProduct(product))}
      layoutId={`card-${product.id}`}
      key={`card-${product.id}`}
      variants={productCardVariants}
      whileHover={{
        scale: 1.02,
      }}
      className='pt-4 border w-full shadow flex flex-col items-center bg-white rounded-xl gap-4 transition-shadow hover:shadow-xl cursor-pointer overflow-hidden duration-700 col-span-1'
      transition={{
        ease,
        duration: 0.8,
      }}
    >
      <motion.div
        className='flex-1 h-1/2'
        key={`image-${product.id}`}
        layoutId={`image-${product.id}`}
        layout='position'
      >
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className='aspect-square object-contain'
        />
      </motion.div>
      <motion.div className='w-full'>
        <motion.h2
          layoutId={`title-${product.id}`}
          key={`title-${product.id}`}
          layout='position'
          className='px-4 text-lg text-center font-semibold line-clamp-2'
        >
          {product.title}
        </motion.h2>
      </motion.div>
      <div className='p-4 flex justify-between items-center bg-slate-50 border-t w-full '>
        <motion.p
          layout='position'
          layoutId={`price-${product.id}`}
          key={`price-${product.id}`}
          className='font-semibold text-lg'
          transition={{
            ease,
            duration: 0.8,
          }}
        >
          {product.price.toLocaleString('en-ca', {
            style: 'currency',
            currency: 'CAD',
          })}
        </motion.p>
        <AddToCartButton product={product} />
      </div>
    </motion.div>
  )
}

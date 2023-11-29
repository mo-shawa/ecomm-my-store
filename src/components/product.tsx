import Image from 'next/image'
import { useAppDispatch } from '@/hooks/redux'
import { addToCart } from '@/store/cart-slice'
import { motion } from 'framer-motion'
import { productCardVariants } from '@/utils/framer'

type Props = {
  product: Product
  setSelected: React.Dispatch<React.SetStateAction<Product | null>>
}

export default function Product({ product, setSelected }: Props) {
  const dispatch = useAppDispatch()

  return (
    <motion.div
      onClick={() => setSelected(product)}
      layoutId={`card-${product.id}`}
      id={`card-${product.id}`}
      variants={productCardVariants}
      whileHover={{
        scale: 1.02,
      }}
      className='max-w-sm pt-4 border w-full shadow flex flex-col items-center bg-white rounded-xl gap-4 transition-shadow hover:shadow-xl cursor-pointer'
      key={product.id}
    >
      <Image
        className='h-full object-contain'
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
      />
      <h2 className='px-4 text-lg font-semibold'>{product.title}</h2>
      <div className='p-4 flex justify-between items-center bg-zinc-100 w-full '>
        <p className='font-semibold text-lg'>
          {product.price.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
        <button
          className='bg-black text-white p-4 rounded-lg'
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

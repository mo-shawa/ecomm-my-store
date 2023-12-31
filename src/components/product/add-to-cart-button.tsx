import { useAppDispatch } from '@/hooks/redux'
import { addOneToCart } from '@/store/cart-slice'
import { ease } from '@/utils/framer'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

type Props = {
  product: Product
}

export default function AddToCartButton({ product }: Props) {
  const dispatch = useAppDispatch()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    dispatch(addOneToCart(product))
    toast.success(`Added ${product.title} to your cart!`)
  }

  return (
    <motion.button
      layoutId={`button-${product.id}`}
      layout='position'
      key={`button-${product.id}`}
      onClick={handleClick}
      transition={{
        ease,
        duration: 0.8,
      }}
      className='px-4 block py-2 bg-emerald-50 text-black rounded-lg shadow hover:shadow-lg border transition-all hover:bg-emerald-100 hover:text-emerald-800 hover:border-emerald-200'
    >
      Add to Cart
    </motion.button>
  )
}

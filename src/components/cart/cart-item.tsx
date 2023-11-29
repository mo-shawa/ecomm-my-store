import { useAppDispatch } from '@/hooks/redux'
import {
  removeAllOfItemFromCart,
  removeOneFromCart,
  addOneToCart,
} from '@/store/cart-slice'
import { cartItemVariants } from '@/utils/framer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  cartItem: CartItem
}

export default function CartItem({ cartItem }: Props) {
  const dispatch = useAppDispatch()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      // key={`cart-item-${cartItem.id}`}
      className='flex justify-between items-center border-b border-slate-200 py-4'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cartItemVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='flex gap-4 items-center'>
        <div className='w-20 h-20 aspect-square bg-white rounded-md p-4 flex items-center'>
          <Image
            className='object-cover'
            src={cartItem.image}
            alt={cartItem.title}
            width={100}
            height={100}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3>{cartItem.title}</h3>
          <p className='text-sm text-slate-500'>
            Item total:{' '}
            <span className='font-bold'>
              {(cartItem.quantity * cartItem.price).toLocaleString('en-ca', {
                style: 'currency',
                currency: 'CAD',
              })}
            </span>
          </p>
          <div className='flex border w-min rounded-md bg-white shadow'>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch(removeOneFromCart(cartItem))}
              className='text-red-700 px-2  rounded-tl-xl rounded-bl-xl font-semibold'
            >
              -
            </motion.button>
            <p className='px-2 border-l border-r'>{cartItem.quantity}</p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => dispatch(addOneToCart(cartItem))}
              className='text-emerald-700 px-2  rounded-tr-xl rounded-br-xl  font-semibold'
            >
              +
            </motion.button>
          </div>
        </div>
      </div>
      {isHovered && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => dispatch(removeAllOfItemFromCart(cartItem))}
          className='hidden sm:block text-red-500 font-semibold'
        >
          Remove all
        </motion.button>
      )}
    </motion.div>
  )
}

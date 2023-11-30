import CartItem from '@/components/cart/cart-item'
import PageWrapper from '@/components/layout/page-wrapper'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { emptyCart } from '@/store/cart-slice'
import { getCartQuantity, getCartTotal } from '@/utils/cart'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Cart() {
  const [hasMounted, setHasMounted] = useState(false)
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const total = getCartTotal(cart)
  const quantity = getCartQuantity(cart)

  useEffect(() => setHasMounted(true), []) // necessary due to checking localStorage

  if (!hasMounted) return <></>

  return (
    <PageWrapper>
      <div className='sticky top-2 bg-slate-100 z-20 py-4 flex justify-between items-center border-b'>
        <h1>Your Cart</h1>
        <div className='flex flex-col'>
          <p className='block sm:hidden text-slate-500'>
            Total:{' '}
            {total.toLocaleString('en-ca', {
              style: 'currency',
              currency: 'CAD',
            })}
          </p>
          <p className='hidden sm:block text-slate-500'>
            <span className='font-semibold'>{quantity}</span> items
          </p>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {!!cart.length ? (
          cart.map((product) => (
            <CartItem
              key={`cart-item-${product.id}`}
              cartItem={product}
            />
          ))
        ) : (
          <motion.div
            layout
            key='empty-cart-message'
            className='flex-1 flex-col flex mt-10 justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className='text-slate-500'>Your cart is empty.</p>
            <Link
              href='/'
              className='ml-2 text-xl p-4 text-emerald-500'
            >
              Go shopping!
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {!!cart.length && (
        <div className='fixed bottom-0 left-0 w-full p-4 border-t bg-slate-100'>
          <div className='mx-auto w-full max-w-7xl flex justify-around items-center gap-2'>
            <button
              onClick={() => dispatch(emptyCart())}
              className='px-4 py-2 bg-transparent text-red-700 rounded-lg border border-red-300'
            >
              Clear Cart
            </button>
            <p className='sm:block hidden text-slate-500 ml-auto'>
              Total:{' '}
              {total.toLocaleString('en-ca', {
                style: 'currency',
                currency: 'CAD',
              })}
            </p>
            <button
              onClick={() =>
                alert(`This one's on the house 👉😎👉
              `)
              }
              className='px-4 block py-2 hover:bg-emerald-50 hover:text-black rounded-lg shadow hover:shadow-lg border transition-all bg-emerald-100 text-emerald-800 border-emerald-200'
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}

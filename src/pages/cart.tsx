import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { removeFromCart } from '@/store/cart-slice'
import { use, useEffect, useState } from 'react'

export default function Cart() {
  const [hasMounted, setHasMounted] = useState(false)
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => setHasMounted(true), [])

  if (!hasMounted) return <></>

  return (
    <main>
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={`cart-item-${product.id}`}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => dispatch(removeFromCart(product))}>
            Remove from Cart
          </button>
        </div>
      ))}
    </main>
  )
}

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { removeFromCart } from '@/store/cart-slice'

export default function Cart() {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  return (
    <main>
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => dispatch(removeFromCart(product))}>Remove from Cart</button>
        </div>
      ))}
    </main>
  )
}

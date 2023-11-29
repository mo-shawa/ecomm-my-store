import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setProducts } from '@/store/products-slice'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      dispatch(setProducts(products))
    }
    fetchProducts()
  }, [])

  return (
    <main>
      <h1>Welcome to My Store</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Image src={product.image} alt={product.title} width={200} height={200} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </main>
  )
}

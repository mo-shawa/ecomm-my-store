import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setProducts } from '@/store/products-slice'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProductModal from '@/components/product/product-modal'
import ProductList from '@/components/product/product-list'
import SkeletonList from '@/components/loader'

export default function Home() {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  const selectedProduct = useAppSelector((state) => state.selectedProduct)

  const [ready, setReady] = useState(false)

  useEffect(() => {
    // set ready after 3 seconds
    setTimeout(() => setReady(true), 3000)
  })

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      dispatch(setProducts(data))
    }
    fetchProducts()
  }, [])

  return (
    <main className='py-8 px-4 w-full max-w-7xl mx-auto flex flex-col '>
      <h1 className='text-6xl tracking-tighter'>Welcome to My Store</h1>
      <small className='font-light tracking-wide font-mono ml-2 text-slate-500'>
        I am not a copywriter
      </small>
      <p className='tracking-wide text-slate-700 ml-2 mt-5'>
        We sell backpacks, shirts, bracelets, and... gaming monitors?
      </p>

      <AnimatePresence
        initial={false}
        mode='wait'
      >
        {ready ? (
          <ProductList
            key='product-list'
            products={products}
          />
        ) : (
          <SkeletonList key='skeleton-list' />
        )}
      </AnimatePresence>
      <ProductModal selected={selectedProduct} />
    </main>
  )
}

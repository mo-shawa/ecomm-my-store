import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setProducts } from '@/store/products-slice'
import { useEffect, useState } from 'react'
import Product from '@/components/product'
import { motion } from 'framer-motion'
import { productContainerVariants } from '@/utils/framer'
import ProductModal from '@/components/product-modal'

export default function Home() {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      dispatch(setProducts(data))
    }
    fetchProducts()
  }, [])

  return (
    <main className='bg-zinc-100 min-h-screen relative'>
      <h1 className=''>Welcome to My Store</h1>
      {products.length && (
        <motion.div initial='initial' animate='animate' whileHover='whileHover' variants={productContainerVariants} className='flex gap-6 flex-wrap justify-center'>
          {products.map((product) => (
            <Product setSelected={setSelectedProduct} key={product.id} product={product} />
          ))}
        </motion.div>
      )}
      <ProductModal selected={selectedProduct} setSelected={setSelectedProduct} />
    </main>
  )
}

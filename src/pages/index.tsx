import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setInitialProducts, addPageOfProducts } from '@/store/products-slice'
import { useEffect } from 'react'
import { AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import ProductModal from '@/components/product/product-modal'
import ProductList from '@/components/product/product-list'
import SkeletonList from '@/components/layout/loader'
import PageWrapper from '@/components/layout/page-wrapper'

export default function Home() {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  const selectedProduct = useAppSelector((state) => state.selectedProduct)

  // const { scrollYProgress } = useScroll()

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   if (latest >= 0.8) {
  //     fetchProducts()
  //   }
  // })

  async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    dispatch(setInitialProducts(data))
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <PageWrapper>
      <h1>Welcome to My Store</h1>
      <small className='font-light tracking-wide font-mono ml-2 text-slate-500'>
        I am not a copywriter
      </small>
      <p className='ml-2 mt-5'>
        We sell backpacks, shirts, bracelets, and... gaming monitors?
      </p>

      <AnimatePresence
        initial={false}
        mode='wait'
      >
        {products.length ? (
          <ProductList
            key='product-list'
            products={products}
          />
        ) : (
          <SkeletonList key='skeleton-list' />
        )}
      </AnimatePresence>
      <ProductModal selected={selectedProduct} />
    </PageWrapper>
  )
}

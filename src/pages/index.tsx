import { useAppSelector } from '@/hooks/redux'
import { AnimatePresence } from 'framer-motion'
import ProductModal from '@/components/product/product-modal'
import ProductList from '@/components/product/product-list'
import SkeletonList from '@/components/product/loader'
import PageWrapper from '@/components/layout/page-wrapper'
import { useGetInitialProductsQuery } from '@/services/product'

export default function Home() {
  const selectedProduct = useAppSelector((state) => state.selectedProduct)
  const { data, isFetching } = useGetInitialProductsQuery()

  const products = data ?? []

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
        {!isFetching ? (
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

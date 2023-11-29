import { productCardVariants } from '@/utils/framer'
import { motion } from 'framer-motion'

const skeletonStyles = 'animate-pulse p-4 bg-slate-200 rounded-md h-6'

export default function ProductSkeleton() {
  return (
    <motion.div
      variants={productCardVariants}
      className={`border w-full max-w-[25rem] shadow flex flex-col items-center rounded-xl gap-2 overflow-hidden bg-white cursor-not-allowed`}
    >
      <div className='h-[200px] w-[200px]  '></div>
      <h2 className={`w-1/2 self-start ml-4 ${skeletonStyles}`}></h2>
      <h2 className={`w-1/3 self-start ml-4 ${skeletonStyles}`}></h2>
      <div className='p-6 flex justify-between items-center bg-slate-50 border-t w-full '>
        <p className={`w-12 ${skeletonStyles}`}></p>
        <button className={`w-20 ${skeletonStyles}`} />
      </div>
    </motion.div>
  )
}

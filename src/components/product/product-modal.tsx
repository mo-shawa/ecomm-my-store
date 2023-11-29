import {
  ease,
  ratingChildVariants,
  ratingContainerVariants,
} from '@/utils/framer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useAppDispatch } from '@/hooks/redux'
import { setSelectedProduct } from '@/store/selected-product-slice'
import AddToCartButton from '../add-to-cart-button'

type Props = {
  selected: Product | null
}

export default function ProductModal({ selected }: Props) {
  const dispatch = useAppDispatch()

  if (!selected) return <></>

  return (
    <motion.div
      onClick={() => dispatch(setSelectedProduct(null))}
      className='fixed inset-0 z-40 flex cursor-pointer items-center justify-center overflow-y-scroll px-4'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
        onClick={() => dispatch(setSelectedProduct(null))}
        className='absolute inset-0 bg-black/20 filter backdrop-blur-md'
      ></motion.div>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        layoutId={`card-${selected.id}`}
        className='max-w-sm pt-4 border w-full flex flex-col items-center bg-white rounded-xl gap-4 shadow-xl cursor-pointer z-50 overflow-hidden max-h-[90vh]'
        key={`card-${selected.id}`}
        transition={{
          duration: 0.8,
          ease,
        }}
      >
        <motion.div
          className='h-full '
          layoutId={`image-${selected.id}`}
          layout='position'
          key={`image-${selected.id}`}
        >
          <Image
            // key={selected.id}
            src={selected.image}
            alt={selected.title}
            width={200}
            height={200}
            className='aspect-square object-contain'
          />
        </motion.div>
        <motion.h2
          layoutId={`title-${selected.id}`}
          layout='position'
          key={`title-${selected.id}`}
          className='px-4 text-lg font-semibold'
        >
          {selected.title}
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5,
              ease: ease,
            },
          }}
          className='px-4 tracking-tight text-sm sm:text-base font-light'
        >
          {selected.description}
        </motion.p>
        <motion.div
          initial='initial'
          animate='animate'
          variants={ratingContainerVariants}
          className='w-full px-4'
        >
          <motion.small variants={ratingChildVariants}>Rating</motion.small>
          <motion.div
            variants={ratingChildVariants}
            className='flex gap-1'
          >
            {Array(Math.round(selected.rating.rate))
              .fill(null)
              .map((_, i) => (
                <svg
                  key={i}
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 1l2.928 6.472L19.856 8.5l-5.36 5.216L15.928 19 10 15.472 4.072 19l1.432-5.284L.144 8.5l6.928-.028L10 1z'
                    clipRule='evenodd'
                  />
                </svg>
              ))}
          </motion.div>
          <motion.small variants={ratingChildVariants}>
            {selected.rating.count} reviews
          </motion.small>
        </motion.div>
        <div className='p-4 border-t flex justify-between items-center bg-slate-50 w-full mt-auto'>
          <motion.p
            layout='position'
            layoutId={`price-${selected.id}`}
            key={`price-${selected.id}`}
            className='font-semibold text-lg'
            transition={{
              ease,
              duration: 0.8,
            }}
          >
            {selected.price.toLocaleString('en-ca', {
              style: 'currency',
              currency: 'CAD',
            })}
          </motion.p>
          <AddToCartButton product={selected} />
        </div>
      </motion.div>
    </motion.div>
  )
}

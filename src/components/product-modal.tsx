import { ease } from '@/utils/framer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { addToCart } from '@/store/cart-slice'
import { useAppDispatch } from '@/hooks/redux'

type Props = {
  selected: Product | null
  setSelected: React.Dispatch<React.SetStateAction<Product | null>>
}

export default function ProductModal({ selected, setSelected }: Props) {
  const dispatch = useAppDispatch()

  if (!selected) return <></>

  return (
    <motion.div
      onClick={() => setSelected(null)}
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
        onClick={() => setSelected(null)}
        className='absolute inset-0 bg-black/20 filter backdrop-blur-md'
      ></motion.div>
      <motion.div
        layoutId={`card-${selected.id}`}
        id={`card-${selected.id}`}
        className='max-w-sm pt-4 border w-full shadow flex flex-col items-center bg-white rounded-xl gap-4 transition-shadow hover:shadow-xl cursor-pointer z-50'
        key={selected.id}
      >
        <Image
          className='h-full max-h-[50%] object-contain'
          src={selected.image}
          alt={selected.title}
          width={200}
          height={200}
        />
        <h2 className='px-4 text-lg font-semibold'>{selected.title}</h2>
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
          className='px-4 font-light'
        >
          {selected.description}
        </motion.p>
        <div className='p-4 flex justify-between items-center bg-zinc-100 w-full mt-auto'>
          <p className='font-semibold text-lg'>
            {selected.price.toLocaleString('en-us', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
          <button
            className='bg-black text-white p-4 rounded-lg'
            onClick={() => dispatch(addToCart(selected))}
          >
            Add to Cart
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

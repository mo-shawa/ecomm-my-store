import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import Navbar from '@/components/layout/navigation/navbar'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { pageTransitionVariants } from '@/utils/framer'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <Provider store={store}>
      <Navbar />
      <AnimatePresence
        initial={true}
        mode='wait'
      >
        <motion.div
          key={router.route}
          className='bg-slate-100 min-h-screen relative'
          variants={pageTransitionVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <motion.div
            style={{ scaleX }}
            className='h-2 origin-left rounded-lg w-full bg-emerald-200 sticky top-0 z-30'
          />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Toaster
        position='bottom-center'
        reverseOrder={false}
        toastOptions={{}}
      />
    </Provider>
  )
}

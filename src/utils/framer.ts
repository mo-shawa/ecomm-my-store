import { AnimationProps } from 'framer-motion'

export const ease = [0.6, 0.01, 0.05, 0.95]

export const productContainerVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
}

export const productCardVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
    y: 20,
  },

  animate: {
    opacity: 1,
    y: 0,
    // transition: (i: number) => ({
    //   delay: i * 0.1,
    //   ease,
    // }),
  },
}

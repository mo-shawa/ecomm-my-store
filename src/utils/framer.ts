import { AnimationProps } from 'framer-motion'

export const ease = [0.6, 0.01, 0.05, 0.95]

export const navItemVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
    x: 20,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease,
    },
  },
}

export const cartQuantityVariants: AnimationProps['variants'] = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease,
    },
  },

  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease,
    },
  },
}

export const pageTransitionVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
    y: 10,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },

  exit: {
    opacity: 0,
    y: 10,
    transition: {
      when: 'beforeChildren',
      duration: 0.5,
      ease,
    },
  },
}

export const productContainerVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },

  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
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
    transition: {
      ease,
    },
  },
}

export const productDescriptionVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: ease,
    },
  },
}

export const ratingContainerVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      ease: ease,
      staggerChildren: 0.3,
    },
  },
}

export const ratingChildVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: ease,
    },
  },
}

export const cartItemVariants: AnimationProps['variants'] = {
  initial: {
    opacity: 0,
    y: 20,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease,
    },
  },

  exit: {
    opacity: 0,
    y: -10,
    transition: {
      ease,
    },
  },
}

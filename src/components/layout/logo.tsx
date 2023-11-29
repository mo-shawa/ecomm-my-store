import { ease } from '@/utils/framer'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.svg
      whileHover={{ rotate: 25 }}
      width='64px'
      height='64px'
      viewBox='0 0 48.00 48.00'
      id='b'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='#000000'
      strokeWidth='1.152'
    >
      <g
        id='SVGRepo_bgCarrier'
        strokeWidth='0'
      ></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <defs> </defs>{' '}
        <motion.path
          initial={{ pathLength: 0 }}
          transition={{ duration: 2, ease }}
          animate={{ pathLength: 1 }}
          id='c'
          className='d'
          d='m40.5,5.5H7.5c-1.1046,0-2,.8954-2,2v33c0,1.1046.8954,2,2,2h33c1.1046,0,2-.8954,2-2V7.5c0-1.1046-.8954-2-2-2Z'
        ></motion.path>{' '}
        <g>
          {' '}
          <motion.path
            initial={{ pathLength: 0 }}
            transition={{ duration: 2, ease }}
            animate={{ pathLength: 1 }}
            className='d'
            d='m27.1963,22.2612c-1.1867-.1754-2.265.4561-2.265,2.2015v.4137c0,1.4892,1.2072,2.6964,2.6964,2.6964h0c1.4892,0,2.6964-1.2072,2.6964-2.6964v-1.7527c0-1.4892-1.2072-2.6964-2.6964-2.6964-1.2819,0-1.8008.2714-2.5158,1.0494'
          ></motion.path>{' '}
          <g>
            {' '}
            <line
              className='d'
              x1='17.2285'
              y1='16.7871'
              x2='17.2285'
              y2='27.5728'
            ></line>{' '}
            <motion.path
              initial={{ pathLength: 0 }}
              transition={{ duration: 2, ease }}
              animate={{ pathLength: 1 }}
              className='d'
              d='m17.2285,23.1237c0-1.4892,1.2072-2.6964,2.6964-2.6964h0c1.4892,0,2.6964,1.2072,2.6964,2.6964v4.4491'
            ></motion.path>{' '}
          </g>{' '}
          <motion.path
            initial={{ pathLength: 0 }}
            transition={{ duration: 2, ease }}
            animate={{ pathLength: 1 }}
            className='d'
            d='m10.3361,26.9699c.4923.4134,1.0239.6029,2.2176.6029h.6049c.9845,0,1.7825-.7998,1.7825-1.7864h0c0-.9866-.7981-1.7864-1.7825-1.7864h-1.2099c-.9845,0-1.7825-.7998-1.7825-1.7864h0c0-.9866.7981-1.7864,1.7825-1.7864h.6049c1.1937,0,1.7253.1894,2.2176.6029'
          ></motion.path>{' '}
          <g>
            {' '}
            <motion.path
              initial={{ pathLength: 0 }}
              transition={{ duration: 2, ease }}
              animate={{ pathLength: 1 }}
              className='d'
              d='m32.4409,24.8763c0,1.4892,1.2072,2.6964,2.6964,2.6964h0c1.4892,0,2.6964-1.2072,2.6964-2.6964v-1.7527c0-1.4892-1.2072-2.6964-2.6964-2.6964h0c-1.4892,0-2.6964,1.2072-2.6964,2.6964'
            ></motion.path>{' '}
            <line
              className='d'
              x1='32.4409'
              y1='20.4272'
              x2='32.4409'
              y2='31.2129'
            ></line>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </motion.svg>
  )
}

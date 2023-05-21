import React from 'react'
import ServicesTab from './ServicesTab'
import {motion} from 'framer-motion'
import animations from '@/animations';

const Services = () => {
  return (
    <section className='px-6'>
      <h4 className='text-3xl font-semibold text-bluetitle text-center mb-12 lg:text-4xl lg:mb-12'>Our Services.</h4>
      <motion.div
        variants={animations}
        initial="initialFade"
        whileInView="animateFade"
        viewport={{once:true}}
      >
        <ServicesTab />
      </motion.div>
    </section>
  )
}

export default Services
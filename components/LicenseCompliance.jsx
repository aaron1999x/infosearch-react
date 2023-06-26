import React from 'react'
import {motion} from 'framer-motion'
import maisca1 from '../public/maisca.webp';
import maisca2 from '../public/maiscalogo.webp';
import ssm from '../public/ssm.webp';
import animations from '@/animations';
import Image from 'next/image';

const LicenseCompliance = () => {
  return (
    <section className='px-6 my-14 lg:px-12 lg:py-12'>
      <div className='flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-24'>
        <div>
          <motion.h4 className='text-3xl font-semibold text-bluetitle text-center mb-6'
            variants={animations}
            initial="initialLeft"
            whileInView="animateX"
            viewport={{once:true}}
          >We are Registered With</motion.h4>
          <motion.div className='flex justify-center items-center gap-6'
            variants={animations}
            initial="initialFade"
            whileInView="animateFade"
            viewport={{once:true}}
          >
            <Image src={maisca1} alt='maisca' />
            <Image src={maisca2} alt='maisca2' />
          </motion.div>
        </div>
        <div>
          <motion.h4 className='text-3xl font-semibold mb-2 text-bluetitle text-center mb-6'
            variants={animations}
            initial="initialLeft"
            whileInView="animateX"
            viewport={{once:true}}
          >In Compliance With</motion.h4>
          <motion.div className='flex justify-center items-center gap-6'
              variants={animations}
            initial="initialFade"
            whileInView="animateFade"
            viewport={{once:true}}
          >
            <Image src={ssm} alt='SSM' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LicenseCompliance
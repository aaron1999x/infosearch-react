import React from 'react'
import HomeAccordion from './HomeAccordion'
import CompanyStat from './CompanyStat'
import {motion} from 'framer-motion'
import animations from '@/animations';

const stats = {
  initial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren:1
    }
  }
}

const statsItem={
  initial:{
    opacity:0,
    y:50
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  },
}


const WhyUs = () => {
  return (
    <section className='px-6 mb-24 lg:w-[1000px] 2xl:w-[1200px] lg:pt-1 lg:mx-auto lg:mb-24 2xl:mb-36'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <motion.h4 className='text-3xl font-semibold mb-4 text-bluetitle lg:w-2/5 lg:text-4xl'
          variants={animations}
          initial="initialLeft"
          whileInView="animateX"
          viewport={{once:true}}
        >Why choose us?</motion.h4>
        <motion.p className='text-sm lg:w-3/5 lg:text-base'
        >
          With 30+ years of experience, we offer comprehensive corporate secretarial services to give your business a competitive edge. From company registration to advisory, our skilled professionals meet your specific needs, making us your one-stop-shop. Delegate administrative work to us and focus on growing your business hassle-free.<br/>Choose Infosearch for SME Success!
        </motion.p>
      </div>
      <div className='my-8 flex flex-col lg:flex-row justify-between item-center lg:my-12'>
        <motion.div className='lg:w-[500px]'
          variants={animations}
          initial="initialBottom"
          whileInView="animateY"
          viewport={{once:true}}
        >
          <HomeAccordion />
        </motion.div>
        <motion.div className='flex flex-col gap-6 mt-10 lg:items-center lg:flex-row lg:mt-0 lg:flex-wrap lg:w-[400px] '
          variants={stats}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
        >
          <motion.div
            variants={statsItem}
          >
            <CompanyStat number='600' text="active clients" />
          </motion.div>
          <motion.div
            variants={statsItem}
          >
            <CompanyStat number='2000' text="companies incoporated" />
          </motion.div>
          <motion.div
            variants={statsItem}
          >
            <CompanyStat number='5000' text="lifetime clients" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default WhyUs
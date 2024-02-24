import React from 'react'
import {motion} from 'framer-motion'
import AnimatedText from './AnimatedText'
import { TypeAnimation } from 'react-type-animation'

const heroAnimations={
  initialLeft:{
    opacity:0,
    x:-50
  },
  animateX:{
    opacity:1,
    x:0,
    transition:{
      duration:1,
      delay:1
    }
  },
  initialBottom:{
    opacity:0,
    y:50
  },
  animateY:{
    opacity:1,
    y:0,
    transition:{
      duration:1,
      delay:1
    }
  },
}

const Hero = () => {
  return (
    <div className=' h-full flex items-center -mt-[32px] px-6 lg:w-[1000px] 2xl:w-[1200px]  lg:mx-auto'>
      <div>
        <motion.p className='text-infored text-lg font-semibold uppercase tracking-tight'
          variants={heroAnimations}
          initial="initialLeft"
          animate="animateX"
          
        >Infosearch consultancy PLT
        </motion.p>
        <p className='text-sm text-gray-500'>
          201404001540 (LLP0002962-LGN)
        </p>
        <AnimatedText text="Simplify your corporate journey with us." />
        <p className='text-xl md:text-2xl md:inline'>Our services consists of </p>
        <TypeAnimation
          sequence={[
            'Secretary Appointment.',
            1000, // Waits 1s
            'Trademark Registration.', 
            1000, // Waits 1s
            'Company Registration.',
            1000,
        
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
          className='text-xl text-infored md:text-2xl'
        />
        <div className='mt-3'>
          <motion.button className="bg-infored hover:bg-white hover:text-infored hover:border-infored border text-white font-bold py-2 px-4 rounded-lg"
            variants={heroAnimations}
            initial="initialBottom"
            animate="animateY"
          >
            <a href="mailto:info@info-search.com.my?subject=I would like a Qoute!">Get a Quote</a>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Hero
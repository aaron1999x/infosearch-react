import React from 'react'
import {motion} from 'framer-motion'

const AnimatedText = (props) => {

  const qoute = {
    initial:{
      opacity:1,
    },
    animate:{
      opacity:1,
      transition:{
        delay:0.5,
        staggerChildren:0.08
      }
    }
  }
  
  const singleWord = {
    initial:{
      opacity:0,
      y:50
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        duration:1
      }
    }
  }
  
  return (
    <motion.h1 className='text-5xl font-bold md:text-6xl my-2 lg:max-w-3xl'
      variants={qoute}
      initial="initial"
      animate="animate"
    >
      {
        props.text.split(" ").map((word,index) =>
          <motion.span key={word+'-'+index} className='inline-block'
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        )
      }
      
    </motion.h1>
  )
}

export default AnimatedText
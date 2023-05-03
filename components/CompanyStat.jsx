import React from 'react'
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

const CompanyStat = (props) => {

  const [hasTriggered, setHasTriggered] = React.useState(false);
  const [ref, inView] = useInView();

  React.useEffect(() => { //animation only happens once
    if (inView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [inView, hasTriggered]);

  return (
    <div ref={ref} className='border-l-4 border-infored pl-4'>
      <div className='text-3xl font-bold'>
        {hasTriggered ? 
          <CountUp 
            end={props.number}
            duration={4}
            separator=","
            suffix="+"
          /> : 0
        }
      </div>
      <div>
        {props.text}
      </div>
    </div>
  )
}

export default CompanyStat
import React from 'react'
import logolight from '../public/info-logo-white.png'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai';
import Image from 'next/image';
import MapNew from './MapNew';

const Footer = () => {
  return (
    <footer className='px-6 pt-10 pb-3 bg-bluelite'>
      <div className='flex flex-col gap-16 py-6 lg:flex-row lg:items-start lg:justify-between lg:w-[1000px] lg:mx-auto 2xl:w-[1400px]'>
        <div className='lg:w-1/5'>
          <Image src={logolight} alt='Infosearch logo' className='w-[180px] lg:w-[200px]'/>
          <p className='text-sm text-bluetitle mt-2'>
            201404001540 (LLP0002962-LGN)
          </p>
        </div>
        <div className='lg:w-2/5'>
          <h4 className='text-2xl text-white font-semibold mb-2 lg:text-3xl'>Contact</h4>
          <div className='flex items-center text-bluetitle gap-2 text-lg mb-2'>
            <AiOutlinePhone/>
            <a href="tel:0378051810" className='hover:underline '>(+603) 7805 1810</a>
          </div>
          <div className='flex items-center text-bluetitle gap-2 text-lg'>
            <AiOutlineMail />
            <a href="mailto:info@info-search.com.my" className='hover:underline lg:text-lg'>info@info-search.com.my</a>
          </div>
        </div>
        <div className='flex flex-col lg:w-2/5'>
          <div>
            <h4 className='text-2xl text-white font-semibold mb-2 lg:text-3xl'>Headquarters</h4>
            <a href="https://www.google.com/maps/dir/?api=1&destination=42B,%20Jalan%20SS%206/8,%2047301%20Petaling%20Jaya,%20Selangor,%20Malaysia" className='hover:underline text-bluetitle lg:text-lg'>
              42B, Jalan SS 6/8, Kelana Jaya 47301 Petaling Jaya, Selangor
            </a>
          </div>
          <div className='flex mt-5'>
            <MapNew />
          </div>
        </div>
        
      </div>
      <div className='flex justify-center items-center text-white mt-5'>
        <p className=' text-sm font-semibold'>Designed and Built by <span><a href="https://atys.dev/" target='_blank' className='underline'>Aaron</a></span>.</p>
      </div>
    </footer>
  )
}

export default Footer
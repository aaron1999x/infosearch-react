import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import logo from '../public/info-logo.png'
import logolight from '../public/info-logo-white.png'
import { TypeAnimation } from 'react-type-animation';
import HomeAccordion from '../components/HomeAccordion';
import CompanyStat from '@/components/CompanyStat';
import ServicesTab from '@/components/ServicesTab';
import maisca1 from '../public/maisca.webp';
import maisca2 from '../public/maiscalogo.webp';
import ssm from '../public/ssm.webp';
import Map from '@/components/Map';
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai';
import whatsapp from '../public/whatsapp-white.png';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Infosearch</title>
        <meta name="description" content="Infosearch Consultancy" />
      </Head>
      <main className={` ${inter.className} relative`}>
        <section className='h-screen bg-white'>
          <nav className='w-full p-6 lg:px-12 2xl:px-32'>
              <Image src={logo} className='w-[180px] lg:w-[200px]' />
          </nav>
          <div className=' h-full flex items-center -mt-[32px] px-6 lg:w-[1000px] 2xl:w-[1200px]  lg:mx-auto'>
            <div>
              <p className='text-infored text-lg font-semibold uppercase tracking-tight'>Infosearch consultancy</p>
              <h1 className='text-5xl font-bold md:text-6xl md:my-2 lg:max-w-3xl'>
                Simplify your corporate journey with us.
              </h1>
              <p className='text-xl md:text-2xl md:inline'>Our services consists of </p>
              <TypeAnimation
                sequence={[
                  'Secretarial Appointments.',
                  1000, // Waits 1s
                  'Trademark Registration.', 
                  1000, // Waits 1s
                  'Company Formation.',
                  1000,
              
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
                className='text-xl text-infored md:text-2xl'
              />
              <div className='mt-3'>
                <button class="bg-infored hover:bg-white hover:text-infored hover:border-infored border text-white font-bold py-2 px-4 rounded-lg">
                  <a href="mailto:info@info-search.com.my?subject=I would like a Qoute!">Get a Qoute</a>
                </button>
              </div>
            </div>

          </div>

        </section>
        <section className='px-6 mb-12 lg:w-[1000px] 2xl:w-[1200px] lg:mx-auto lg:mb-24 2xl:mb-36'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <h4 className='text-3xl font-semibold mb-2 text-bluetitle lg:w-2/5 lg:text-4xl'>Why choose us?</h4>
            <p className='text-sm lg:w-3/5 lg:text-base'>
              At Infosearch, we specialize in providing corporate secretarial services to SMEs. With over 30 years of experience, we offer a comprehensive range of services, including business incorporation and advisory, to give your business a competitive edge. Our team of professionals has the necessary skill sets to meet your specific needs, making us a one-stop-shop for all your business needs. Choose us to handle the complicated administrative work, while you focus on growing your business.
            </p>
          </div>
          <div className='my-8 flex flex-col lg:flex-row justify-between item-center lg:my-12'>
            <div className='lg:w-[500px]'>
              <HomeAccordion />
            </div>
            <div className='flex flex-col gap-6 mt-10 lg:items-center lg:flex-row lg:mt-0 lg:flex-wrap lg:w-[400px] '>
              <CompanyStat number='600' text="active clients" />
              <CompanyStat number='2000' text="companies incoporated" />
              <CompanyStat number='5000' text="lifetime clients" />
            </div>
          </div>

        </section>
        <section className='px-6'>
          <h4 className='text-3xl font-semibold text-bluetitle text-center mb-6 lg:text-4xl lg:mb-12'>Our Services.</h4>
          <div>
            <ServicesTab />
          </div>
        </section>

        <section className='px-6 my-14 lg:px-12 lg:py-12'>
          <div className='flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-24'>
            <div>
              <h4 className='text-3xl font-semibold text-bluetitle text-center mb-6'>We are Licensed By</h4>
              <div className='flex justify-center items-center gap-6'>
                <Image src={maisca1} alt='maisca' />
                <Image src={maisca2} alt='maisca2' />
              </div>
            </div>
            <div>
              <h4 className='text-3xl font-semibold mb-2 text-bluetitle text-center mb-6'>In Compliance With</h4>
              <div className='flex justify-center items-center gap-6'>
                <Image src={ssm} alt='maisca' />
              </div>
            </div>
          </div>
        </section>

        <div className='fixed z-50 w-[60px] h-[60px] right-2 bottom-2  bg-whatsapp rounded-full p-3  hover:scale-125 ease duration-300 lg:right-5 lg:bottom-5'>
          <a href="https://wa.me/60378051810?text=I%20would%20like%20to%20get%20a%20qoute!" target='_blank'><Image src={whatsapp} /></a>
        </div>

        <footer className='px-6 pt-10 pb-3 bg-bluelite lg:px-16 2xl:px-32'>
          <div className='flex flex-col gap-10 py-6 lg:flex-row lg:items-start lg:justify-between'>
            <div className='lg:w-1/5'>
              <Image src={logolight} className='w-[180px] lg:w-[200px]'/>
            </div>
            <div className='lg:w-1/5'>
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
                <Map />
              </div>
            </div>
            
          </div>
          <div className='flex justify-center items-center text-white mt-5'>
            <p className=' text-sm font-semibold'>Designed and Built by <span><a href="https://aaron-linktree.vercel.app/" target='_blank' className='underline'>Aaron</a></span>.</p>
          </div>
        </footer>
        
      </main>
    </>
    
  )
}

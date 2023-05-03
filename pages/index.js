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
import Map from '@/components/Map'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'


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
          <nav className='w-full p-6'>
              <Image src={logo} className='w-[180px]' />
              
          </nav>
          <div className=' h-full flex items-center -mt-[32px] px-6'>
            <div>
              <p className='text-infored text-lg font-semibold uppercase tracking-tight'>Infosearch consultancy</p>
              <h1 className='text-5xl font-bold'>
                Simplify your corporate journey with us.
              </h1>
              <p className='text-xl'>Our services consists of </p>
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
                className='text-xl text-infored'
              />
              <div className='mt-3'>
                <button class="bg-infored hover:bg-white hover:text-infored hover:border-infored border text-white font-bold py-2 px-4 rounded-lg">
                  <a href="mailto:info@info-search.com.my?subject=I would like a Qoute!">Get a Qoute</a>
                </button>
              </div>
            </div>

          </div>

        </section>
        <section className='px-6 mb-12'>
          <div>
            <h4 className='text-3xl font-semibold mb-2 text-bluetitle'>Why choose us?</h4>
            <p className='text-sm'>
              Since 1990, we’ve helped thousands of companies nationwide.
              We will take care of all your business needs through our broad scopes of Corporate Secretarial Services that cover all areas of company formation and ongoing administration.
            </p>
          </div>
          <div className='my-8'>
            <HomeAccordion />
            <div className='flex flex-col gap-6 mt-10'>
              <CompanyStat number='600' text="active clients" />
              <CompanyStat number='2000' text="companies incoporated" />
              <CompanyStat number='5000' text="lifetime clients" />
            </div>
          </div>

        </section>
        <section className='px-6'>
          <h4 className='text-3xl font-semibold mb-2 text-bluetitle text-center mb-6'>Our Services.</h4>
          <ServicesTab />
        </section>

        <section className='px-6 my-14'>
          <div className='flex flex-col gap-8'>
            <div>
              <h4 className='text-3xl font-semibold mb-2 text-bluetitle text-center mb-6'>We are Licensed By</h4>
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

        <footer className='px-6 pt-10 pb-3 bg-bluelite'>
          <div className='flex flex-col gap-10 py-6'>
            <Image src={logolight} className='w-[150px]'/>
            <div>
              <h4 className='text-2xl text-white font-semibold mb-2'>Contact</h4>
              <div className='flex items-center text-bluetitle gap-2 text-lg'>
                <AiOutlinePhone/>
                <a href="tel:0378051810" className='hover:underline'>(+603) 7805 1810</a>
              </div>
              <div className='flex items-center text-bluetitle gap-2 text-lg'>
                <AiOutlineMail />
                <a href="mailto:info@info-search.com.my" className='hover:underline'>info@info-search.com.my</a>
              </div>
            </div>
            <div>
              <h4 className='text-2xl text-white font-semibold mb-2'>Headquarters</h4>
              <a href="https://www.google.com/maps/dir/?api=1&destination=42B,%20Jalan%20SS%206/8,%2047301%20Petaling%20Jaya,%20Selangor,%20Malaysia" className='hover:underline text-bluetitle'>
                42B, Jalan SS 6/8, Kelana Jaya 47301 Petaling Jaya, Selangor
              </a>
            </div>
            <div className='flex'>
              <Map />
            </div>
            
          </div>
          <div className='flex justify-center items-center text-white mt-5'>
            <p>Built by <span><a href="https://aaron-linktree.vercel.app/" target='_blank' className='underline'>Aaron</a></span>.</p>
          </div>

        </footer>
      </main>
    </>
    
  )
}

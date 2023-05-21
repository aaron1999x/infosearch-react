import { Inter } from 'next/font/google'
import MetaHead from '@/components/MetaHead'
import Script from 'next/script'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Services from '@/components/Services';
import LicenseCompliance from '@/components/LicenseCompliance';
import WhatsappCTA from '@/components/WhatsappCTA';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MetaHead />
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-DVB2TSL1Q5'
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DVB2TSL1Q5');
        `}
      </Script>
      
      <main className={` ${inter.className} relative`}>
        <section className='h-screen bg-white'>
          <Navbar />
          <Hero />
    
        </section>

        <WhyUs />
        <Services />
        <LicenseCompliance />
        <WhatsappCTA />
        <Footer />
        
      </main>
    </>
    
  )
}
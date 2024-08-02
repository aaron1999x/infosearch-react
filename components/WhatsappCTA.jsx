import React from 'react';
import whatsapp from '../public/whatsapp-white.png';
import Image from 'next/image';

const WhatsappCTA = () => {
  return (
    <div className="animate-bounce fixed z-50 w-[60px] h-[60px] right-2 bottom-2  bg-whatsapp rounded-full p-3  hover:scale-125 ease duration-300 lg:right-5 lg:bottom-5">
      <a
        href="https://wa.me/125683283?text=I%20would%20like%20to%20get%20a%20quote!"
        target="_blank"
      >
        <Image src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhatsappCTA;

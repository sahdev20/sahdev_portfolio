import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='relative flex items-center justify-center mt-2' 
  
    >

      {/* Logo */}
      <MotionLink 
        href="/"
        target='_blank'
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full
        text-2xl font-bold border border-solid border-transparent dark:border-light'
        whileHover={{
          backgroundColor: [
            "#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", 
            "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"
          ],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        SP
      </MotionLink>
    </div>
  );
}

export default Logo;

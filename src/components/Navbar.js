import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {

  const router = useRouter();
  //  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5
  dark:bg-light
  group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  );
}




const CustomMobileLink = ({ href, title, className = "", toggle }) => {

  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  } 
  //  console.log(router);
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}

      <span className={`h-[1px] inline-block  bg-light dark:bg-dark absolute left-0 -bottom-0.5  group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  );
}

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 '>



      <button className=' flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block  transition-all duration-300 h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 translate-y-0.5' : 'translate-y-0.5'}`}></span>

      </button>



      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="Projects" className='mx-4' />
          {/* <CustomLink href="/articles" title="Articles" className='ml-4' /> */}

        </nav>



        <nav className='flex items-center justify-center flex-wrap'>




          <motion.a whileHover={{ y: -2 }} href="https://www.instagram.com/sahdev__2070"
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
            target={"_blank"}>
            <InstagramIcon />
          </motion.a>
          <motion.a whileHover={{ y: -2 }} href="https://github.com/sahdev20"
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
            target={"_blank"}><GithubIcon /></motion.a>
          
          <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/sahdev-patel20/"
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
            target={"_blank"}><LinkedInIcon /></motion.a>
        

          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}

            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {
              mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
            }
          </button>

        </nav>
      </div>





   

      {
        isOpen ?    <motion.div
        
        initial={{scale : 0, opacity : 0, x : -"50%", y:"-50%"}}
        animate={{scale : 1, opacity : 1}}
        className='min-w-[70vw] flex  flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md  py-32
        '>
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick}/>
            <CustomMobileLink href="/about" title="About" className='' toggle={handleClick}/>
            <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick}/>
            <CustomMobileLink href="/articles" title="Articles" className='' toggle={handleClick}/>
  
          </nav>
  
  
  
          <nav className='flex items-center justify-center flex-wrap mt-2'>
  
  
  
  
            <motion.a whileHover={{ y: -2 }} href="/"
              className="w-6 mx-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
              target={"_blank"}>
              <TwitterIcon />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="/"
              className="w-6 mx-3 rounded-full dark:bg-dark sm:mx-1"
              whileTap={{ scale: 0.9 }}
              target={"_blank"}><GithubIcon /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="/"
              className="w-6 mx-3 bg-light rounded-full  sm:mx-1"
              whileTap={{ scale: 0.9 }}
              target={"_blank"} ><PinterestIcon /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="/"
              className="w-6 mx-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
              target={"_blank"}><LinkedInIcon /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="/"
              className="w-6 mx-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
              target={"_blank"}><DribbbleIcon /></motion.a>
  
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
  
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {
                mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
              }
            </button>
  
          </nav>
        </motion.div>
   : null
      }
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>


        <Logo />
      </div>





    </header>
  )
}

export default Navbar


export const InstagramIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    fill="currentColor"
    {...props}
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0-2A7.75 7.75 0 0 0 0 7.75v8.5A7.75 7.75 0 0 0 7.75 24h8.5A7.75 7.75 0 0 0 24 16.25v-8.5A7.75 7.75 0 0 0 16.25 0h-8.5zM12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);
